import AudioRecord from "../components/AudioRecord.jsx";
import { useState } from "react";
import { getSummary, getTextFromSpeech } from "../utils/huggingFace.js";
import DisplayResult from "../components/DisplayResult.jsx";
import { HfInference } from "@huggingface/inference";
import Popup from "../components/Popup.jsx";
import "../styles/general.css";

// const hf = new HfInference("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");

export default function Home() {
  const [isRecordComplete, setIsRecordComplete] = useState(false);
  const [textfromSpeech, setTextfromSpeech] = useState("waiting for recording");
  const [textSummary, setTextSummary] = useState("waiting for recording");
  const [isTokenReceived, setIsTokenReceived] = useState(false);
  const [Hf, setHf] = useState(null);

  async function handleSummarization(audioBlob) {
    try {

      // const hf = new HfInference(HfInference);


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

  function updateToken(token) {
    setIsTokenReceived(true);
    setHf(new HfInference(token));
  }

  return (
    <>
      <Popup isTokenReceived={isTokenReceived} updateToken={updateToken}/>

      <p className="intro-text">
        This is an application that records your voice , converts to text and
        then summarizes it , press the button below to start recording
      </p>

      <AudioRecord handleSummarization={handleSummarization} />
      <DisplayResult
        textfromSpeech={textfromSpeech}
        textSummary={textSummary}
      />
    </>
  );
}