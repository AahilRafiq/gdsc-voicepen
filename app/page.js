import React from 'react';
import '../styles/home.css'


export default function Home() {
  return (
    <div>
      <h1 className=''>VoicePen</h1>

      <div className='voice-to-text'>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button>Start recording</button>
      <button>Stop recording</button>
      </div>

    </div>
  );
}