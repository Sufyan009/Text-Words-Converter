import "./App.css";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // let newText = '';
    setText("");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  //  removes whitespace from the string including newlines
  const EndSpace = () => {
    let newText = text.replace(/\s/g, "");
    setText(newText);
  };
  // const reversed = () => {
  //   let newText="";
  //   for (let index = count.length-1; index >=0; index--) {
  //     newText += count[index];

  //   }

  //    return setText(newText);
  // }
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  //Reverse text Button
  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords;

    setText(newText);
  };
  // We can also upload txt file using this ->
  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setText(event.target.result);
    };
    reader.readAsText(file);
  };

  //   const [color,setColor]=useState("black");

  //  const handleColor=()=>{
  //           let mycolor=prompt("enter your color name");
  //            setColor(mycolor);

  //     }
  const handleLightTheme = () => {
    document.body.style.backgroundColor = "white";
  };
  
  const handleDarkTheme = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label  classNameName="form-label" for="myBox">Enter your text below</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          
          {/* <textarea className="form-control" id="textbox" style={{color:color}} onChange={onChangeclick} value={text} rows="6"></textarea> */}
          {/* <input type="text" className="form-control" id="myBox"  /> */}
        </div>
        <input type="file" className="btn btn-light mx-2" accept="text/plain" onChange = {readTxt}/>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="submit"
          className="btn btn-secondary mx-2"
          onClick={handleLoClick}
          onChange={handleClearClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="text"
          onClick={handleClearClick}
          value={text}
          className="btn btn-warning mx-2"
        >
          Clear Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-info mx-2 my-2"
        >
          Speak
        </button>

        <button type="submit" onClick={EndSpace} className="btn btn-dark mx-2 ">
          End Space
        </button>
        <button
          type="submit"
          onClick={reversed}
          className="btn btn-success mx-2 "
        >
          Reversed
        </button>
        <button
          type="submit"
          onClick={copyText}
          className="btn btn-primary mx-2 "
        >
          Copy Text
        </button>
        <button
          type="submit"
          onClick={handleLightTheme}
          className="btn btn-primary mx-2 "
        >
          handle Light Theme
        </button>
        <button
          type="submit"
          onClick={handleDarkTheme}
          className="btn btn-primary mx-2 "
        >
          handle Dark Theme
        </button>
        {/* <button
          type="submit"
          onChnageClick={handleColor}
          className="btn btn-primary mx-2 "
        >
          handle Color
        </button> */}

        {/* <button type="submit" classNameNameName="btn btn-primary">Convert to UpperCase</button> */}
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          It will take around {0.008 * text.split(" ").length} minutes to read
          this topic.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
