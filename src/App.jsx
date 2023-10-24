import Home from "./pages/Home.jsx";
import  Variant2 from "./pages/Variant2.jsx";
import "./styles/general.css";
import { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Routes , Route , Link} from "react-router-dom";
import 'regenerator-runtime/runtime'

export default function App() {

  const Hf = (new HfInference(import.meta.env.VITE_HF_TOKEN));
  console.log(import.meta.env.VITE_HF_TOKEN);

  return (
    <>
      <div className="navbar-container">
        <h1 className="white-text title">VoicePen</h1> 
        <Link className="nav-btn" to='/'> V1 </Link>
        <Link className="nav-btn" to='/v2'> V2 </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home Hf={Hf}/>}/>
        <Route path="/v2" element={<Variant2 Hf={Hf}/> }/>
      </Routes>
    </>
  );
}
