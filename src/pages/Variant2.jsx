import React from "react";
import { useState } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import '../styles/variant2.css'
import {getSummary} from "../utils/huggingFace.js";

export default function Variant2(Hf){
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [textSummary, setTextSummary] = useState("waiting for recording");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  async function handleSummarization() {
    try {
      // first set the states to loading
      setTextSummary("waiting for response from server...");

      // then get the text from the audio
      const summary = await getSummary(transcript, Hf);
      console.log(summary);
      setTextSummary(summary.summary_text);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <p className="white-text">This is another version where live transcript is generated , click start to start transcript</p>
    <div className="live-transcript-container">
      <p className="transcript">{transcript}</p>
      <div className="transcript-controls">
      <p>Microphone: {listening ? "on" : "off"}</p>
        <button  className="control-btn" onClick={SpeechRecognition.startListening}>Start</button>
        <button  className="control-btn" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button  className="control-btn" onClick={resetTranscript}>Reset</button>
        <button className="control-btn" >Summarize</button>
      </div>
    </div>

    <div className="summary-container">
      <div className="summary-displayer">
        <h2>Text Summary</h2>
        <p>{textSummary}</p>
      </div>
    </div>
    </>
  );
};
