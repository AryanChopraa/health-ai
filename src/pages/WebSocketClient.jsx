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

 
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    let timeoutId;
    if (transcript && ws) {
      // Clear previous timeout
      clearTimeout(timeoutId);
      // Set a new timeout to send the message after 1000ms of silence
      timeoutId = setTimeout(() => {
        ws.send(transcript);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };

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
      <p>Received message: {receivedMessage}</p>
    </div>
  );
};

export default WebSocketClient;
