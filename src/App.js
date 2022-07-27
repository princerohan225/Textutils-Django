// import './App.css';
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [ModeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode !== "dark") {
      // console.log(mode);
      setMode("dark");
      setModeText("Enable LightMode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "dark");

    } else {
      // console.log(mode);
      setMode("light");
      setModeText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
    
  };

  return (
    <>
      <Navbar
        title={"TextUtils"}
        HomeText={"Home"}
        AboutText={"About"}
        mode={Mode}
        modetext={ModeText}
        togglemode={toggleMode}
      />

      <Alert alert={alert} />

      {/* <About mode={Mode} /> */}

      <TextForm
        showAlert={showAlert}
        Heading="Enter your Text to Analyze."
        mode={Mode}
      />
    </>
  );
}

export default App;
