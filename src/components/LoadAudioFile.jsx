import React, { useEffect, useState } from "react";
import "../styles/general.css";

export default function LoadAudioFile({ handleSummarization }) {
  async function addFile(e) {
    const s = URL.createObjectURL(e.target.files[0]);
    const blob = await fetch(s).then((r) => r.blob());
    handleSummarization(blob);
  }

  return (
    <div className="local-audio-loader">
      <label class="custom-file-upload">
        <input type="file" id="fileInput" onChange={addFile} />
        Choose File
      </label>
    </div>
  );
}
