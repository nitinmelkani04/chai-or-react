import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {

  let [text, setText] = useState("");

  function findcharacter(length) {
    if (length > 20) {
      return "only 20 character count limit";
    }
    return <>{length} <br /> character</>   
  }

return (
  <>
    <h1>Text Analyzer</h1>
    <h3>Your Text</h3>
    <textarea
      maxLength={20}
      onChange={(e) => setText(e.target.value)}
      id="myTextarea"
      rows="8"
      placeholder="Write something here... to check how many character"
    ></textarea>
    <br />    <br />
    <h2>{findcharacter(text.length)}</h2>
    <h3>{20 - text.length} characters remaining</h3>
  </>
);
}
export default App;
