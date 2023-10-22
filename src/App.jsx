import Home from "./pages/Home.jsx";
import "./styles/general.css";
import Popup from "./components/Popup.jsx";
import { useState } from "react";

import { HfInference } from "@huggingface/inference";

export default function App() {
  const [isTokenReceived, setIsTokenReceived] = useState(false);
  const [Hf, setHf] = useState(null);

  function updateToken(token) {
    setIsTokenReceived(true);
    setHf(new HfInference(token));
  }

  return (
    <>
      <Popup isTokenReceived={isTokenReceived} updateToken={updateToken} />
      <h1 className="white-text">VoicePen</h1>
      <Home Hf={Hf} />
    </>
  );
}
