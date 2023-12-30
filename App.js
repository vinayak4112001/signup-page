import React,{ useState,useEffect } from "react";
import "./App.css";
import faclogo from "./icons/faclogo.png";
import logo from "./icons/logo.png";
import Image1 from "./icons/Image1.svg";
import Image2 from "./icons/Image2.svg";
import Image3 from "./icons/Image3.svg";
import Carousel from "./Carousel"; // Import the Carousel component

function App() {
  const slides = [Image1, Image2, Image3];

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div className="item-start" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="max-w-50">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
      </div>
      <div className="loginContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: "0", paddingRight: "10px", marginLeft: "18px" }}>Welcome to</h1>
          <img
            src={logo}
            alt=""
            style={{ width: "250px", marginLeft: "-50px" }}
          />
        </div>
        <h2
          style={{
            marginTop: "-19px",
            marginBottom: "30px",
            color: "grey",
            gap: "-10px",
          }}
        >
          Sign-Up to continue
        </h2>

        <div className="input-container">
          <label>Email </label>
          <input style={{ marginLeft: '-2px' }} type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input style={{ marginLeft: '-2px' }} type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <button style={{ marginLeft: '-2px', marginTop: '0px' }} className="loginBut">
          <p style={{ marginTop: '19px' }} > Signup</p>
        </button>
        <p style={{ color: 'grey', marginBottom: '0px', marginTop: '0px' }} >OR</p>
        <div className="logo">
          <button className="siG">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="Google"
              height="30"
            />
            <p style={{ fontSize: "15px" }} >Sign in with Google</p>
          </button>
          <button className="siF">
            <img src={faclogo} alt="Facebook" height="30" />
            <p style={{ fontSize: "15px" }} >Sign in with Facebook</p>
          </button>
        </div>
        <div style={{ margin: '0px 40px', fontSize: '12px' }} ><b>
          <p><b>By signing up, you agree to Kognics CRM Terms of Services & Privacy Policy.</b></p>
          <p style={{ marginTop: '-5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Already have an account?<span style={{ color: '#2a7086' }}>Sign in</span></p>
        </b>
        </div>
      </div>
    </div>
  );
}

export default App;
