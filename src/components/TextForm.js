import React, { useState } from "react";

export default function TextForm(props) {
  // here text is the state inside my TextForm Functional
  // component and setText is my Update function for the
  // input text here, 'Enter Text Here' is the default
  // value for the state text

  // useState must be inside your functional component
  // This is Array destructuring syntax in JS
  // you can't update text like any normal variable
  // you need to use your update function (setText in
  // our case) to do so
  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  //   text = "new text" this is a wrong way to change value of a state, you must use setText(your update function to do so)
  // setText("Hello");
  const handleUpClick = () => {
    let s = text;
    setText(s.toUpperCase());
    props.showAlert("Converted to UpperCase", "success")
  };
  const handleLowClick = () => {
    let s = text;
    setText(s.toLowerCase());
    props.showAlert("Converted to LowerCase", "success")
  };
  const handleClear = () => {
    let s = " ";
    setText(s);
    props.showAlert("Cleared text", "success")
  };
  const handleSpaces = () => {
    let s = text.split(" ").join("");
    setText(s);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handlefindChange = (event) => {
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
  console.log(replaceWord(event.target.value)) ;
  };
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord,rWord);
    setText(newText);
    props.showAlert("Replaced the word", "success")
  };



  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <h3>Find Words</h3>
          <textarea
            className="form-control"
            id="myBox"
            rows="1"
            value={fWord}
            onChange={handlefindChange}
          ></textarea>
          <h3>Replace Words</h3>
          <textarea
            className="form-control"
            id="myBox"
            rows="1"
            value={rWord}
            onChange={handleReplaceChange}
          ></textarea>
          <button className="btn btn-primary mx-1 my-4" onClick={handleReplaceClick}>
          Replace
        </button>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>
          Remove Blank Space
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.length === 0 ?  0 : text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Estimated Reading Time for the text{" "}
          {Math.round(0.008 * text.split(" ").length)} minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
