import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import "../styles/audiorecord.css";

export default function AudioRecord({ handleSummarization }) {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );

  return (
    <div className="audio-recorder-container">
      <AudioRecorder
        onRecordingComplete={(blob) => {
          handleSummarization(blob);
        }}
        recorderControls={recorderControls}
        // downloadOnSavePress={true}
        // downloadFileExtension="mp3"
        showVisualizer={true}
      />
    </div>
  );
}
