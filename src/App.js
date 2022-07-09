import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212522";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      {/* Here title, aboutText is a props for NavBar component */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <TextForm heading="Enter the text to Analyze Below" mode={mode} showAlert = {showAlert}/>
        <About/> */}

          <Routes>
            <Route
              exact path="/home"
              element={
                <TextForm
                  heading="Enter the text to Analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
