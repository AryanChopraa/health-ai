import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WebSocketClient = () => {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  const [potentialDiagnosis, setPotentialDiagnosis] = useState("");
  const [relatedQuestions, setRelatedQuestions] = useState([]);

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:8080");
    newWs.onopen = function () {
      console.log("Connected to server");
    };

    newWs.onmessage = function (event) {
      setReceivedMessage(event.data);
      const responseData = JSON.parse(event.data);
      setPotentialDiagnosis(responseData.potentialDiagnosis);
      setRelatedQuestions(responseData.relatedQuestions);
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
    browserSupportsSpeechRecognition,
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

  const generateReport = () => {
    SpeechRecognition.startListening({ continuous: true });
    toast.success("Microphone On", { autoClose: 1500 });
  };

  const microphoneOff = () => {
    SpeechRecognition.stopListening();
    toast.error("Microphone Off", { autoClose: 1500 });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Doc assistant AI
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={microphoneOn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start
        </button>
        <button
          onClick={microphoneOff}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Stop
        </button>
        <button
          onClick={resetTranscript}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Report
        </button>
      </div>
      <p className="text-xl font-bold text-gray-800 mt-8">
        Microphone: {listening ? "on" : "off"}
      </p>
      <p className="text-xl font-bold text-gray-800 mt-8">{transcript}</p>
      <div className="flex flex-row gap-10">
        <div className="flex text-xl font-bold text-gray-800 mt-8">
          Potential Diagnosis: {potentialDiagnosis}
        </div>
        <div className="flex text-xl font-bold text-gray-800 mt-8">
          Related Questionse: {relatedQuestions}
        </div>
      </div>
    </div>
  );
};

export default WebSocketClient;
