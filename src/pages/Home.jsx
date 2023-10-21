import AudioRecord from "../components/AudioRecord.jsx";
import { useState } from "react";
import { getSummary, getTextFromSpeech } from "../utils/huggingFace.js";
import DisplayResult from "../components/DisplayResult.jsx";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

export default function Home() {
  const [isRecordComplete, setIsRecordComplete] = useState(false);
  const [textfromSpeech, setTextfromSpeech] = useState("waiting for recording");
  const [textSummary, setTextSummary] = useState("waiting for recording");

  async function handleSummarization(audioBlob) {
    try{

      // first set the states to loading
      setTextfromSpeech("loading...");
      setTextSummary("loading...");

      // then get the text from the audio
      const result = await getTextFromSpeech(audioBlob , hf);
      setTextfromSpeech(JSON.stringify(result));
      console.log(result);
      const summary = await getSummary(result.text , hf);
      console.log(summary);
      setTextSummary(JSON.stringify(summary));
    }
    catch(err ){
      console.log(err)
    }
  }

  return (
    <>
      <p>
        This is an application that records your voice , converts to text and
        then summarizes it
      </p>
      <AudioRecord
        handleSummarization={handleSummarization}
      />
      <DisplayResult
        textfromSpeech={textfromSpeech}
        textSummary={textSummary}
      />
    </>
  );
}

// adds audio element to the DOM
// const addAudioElement = (audio) => {
//   const url = URL.createObjectURL(audio);
//   const audioElement = document.createElement('audio');
//   audioElement.src = url;
//   audioElement.controls = true;
//   document.body.appendChild(audioElement);
// };
