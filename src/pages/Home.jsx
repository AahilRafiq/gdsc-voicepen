import AudioRecord from "../components/AudioRecord.jsx";
import { useState } from "react";
import { getSummary, getTextFromSpeech } from "../utils/huggingFace.js";
import DisplayResult from "../components/DisplayResult.jsx";
import LoadAudioFile from "../components/LoadAudioFile.jsx";
import "../styles/general.css";

export default function Home({ Hf }) {
  const [isRecordComplete, setIsRecordComplete] = useState(false);
  const [textfromSpeech, setTextfromSpeech] = useState("waiting for recording");
  const [textSummary, setTextSummary] = useState("waiting for recording");

  async function handleSummarization(audioBlob) {
    try {
      // first set the states to loading
      setTextfromSpeech("waiting for response from server...");
      setTextSummary("waiting for response from server...");

      // then get the text from the audio
      const result = await getTextFromSpeech(audioBlob, Hf);
      setTextfromSpeech(result.text);
      console.log(result);
      const summary = await getSummary(JSON.stringify(result.text), Hf);
      console.log(summary);
      setTextSummary(summary.summary_text);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <p className="intro-text">
        This is an application that records your voice , converts to text and
        then summarizes it , press the button below to start recording
      </p>

      <div className="audio-handler-container">
        <AudioRecord handleSummarization={handleSummarization} />
        <LoadAudioFile handleSummarization={handleSummarization} />
      </div>
      <DisplayResult
        textfromSpeech={textfromSpeech}
        textSummary={textSummary}
      />
    </>
  );
}
