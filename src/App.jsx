import Home from "./pages/Home.jsx";
import  Variant2 from "./pages/Variant2.jsx";
import "./styles/general.css";
import Popup from "./components/Popup.jsx";
import { useState } from "react";
import { HfInference } from "@huggingface/inference";
import { Routes , Route , Link} from "react-router-dom";

export default function App() {
  const [isTokenReceived, setIsTokenReceived] = useState(false);
  const [userToken, setUserToken] = useState(null); 
  const [Hf, setHf] = useState(null);

  function updateToken(token) {
    setIsTokenReceived(true);
    setUserToken(token);
    setHf(new HfInference(token));
  }

  return (
    <>
      <Popup isTokenReceived={isTokenReceived} updateToken={updateToken} />
      <div className="navbar-container">
        <h1 className="white-text title">VoicePen</h1> 
        <Link className="nav-btn" to='/'> V1 </Link>
        <Link className="nav-btn" to='/v2'> V2 </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/v2" element={<Variant2/> }/>
      </Routes>
    </>
  );
}
