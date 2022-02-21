import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [text, setText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);
  const [button,setBtn] = useState(
    {
      color: 'white',
      backgroundColor: 'black',
      border: '2px solid black'
    }
  );

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')

  }
  const colorChange = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    showAlert(`${cls} mode has been enabled`,'success');
    setBtn({
      color: 'black',
      backgroundColor: 'white',
      border: '2px solid white'
    });
  }
  const toggleMode = () => {
    if (mode === 'light') {
      removeBodyClasses();
      setMode('dark');
      setText('Enable lightMode');
      setBtn(
        {
          color: 'white',
          backgroundColor: 'black',
          border: '2px solid black'
        }
      )
      document.body.style.backgroundColor = '#0d1014';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils-DarkMode';
    }
    else {
      removeBodyClasses();
      setMode('light');
      setText('Enable darkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils-LightMode';

      // setInterval(()=>
      // {
      //   document.title='TextUtils is Amazing';
      // },2000);

      // setInterval(()=>
      // {
      //   document.title='Install TextUtils';
      // },1500);

    }
  }
  return (
    <>
      {/* props with value */}
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} colorChange={colorChange} text={text} />
        <Alert alert={alert} />
        {/* default props doesn't need any value */}
        {/* <Navbar/> */}
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={ */}
            <TextForm heading="Word Counter, Character Counter, Convert text Upperacse to Loweracse , Loweracse to Uppercase and Copy the Text" mode={mode} showAlert={showAlert} button={button} />
            {/* }/> */}
            {/* <Route exact path="/about" element={ */}
            {/* <About mode={mode} /> */}
            {/* }/> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
