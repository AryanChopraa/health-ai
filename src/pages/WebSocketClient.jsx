import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { toast } from "react-toastify";

const WebSocketClient = () => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:8080');

    newWs.onopen = function () {
      console.log('Connected to server');
    };

    newWs.onmessage = function (event) {
      setReceivedMessage(event.data);
    };

    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
    if (ws) {
      ws.send(e.target.value); // Sending the message typed in the input field
    }
  };
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript && ws) {
      ws.send(transcript); // Sending the transcript via WebSocket when it changes
    }
  }, [transcript, ws]);

  const microphoneOn = () => {
    SpeechRecognition.startListening({ continuous: true });
    toast.success("Microphone On", { autoClose: 1500 });
  };

  const microphoneOff = () => {
    SpeechRecognition.stopListening();
    resetTranscript(); // Reset transcript after sending
    toast.error("Microphone Off", { autoClose: 1500 });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Clearing input field after submission
  };

  return (
    <div>
      <h1>WebSocket Client</h1>
      <div>
      </div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={microphoneOn}>Start</button>
      <button onClick={microphoneOff}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default WebSocketClient;
