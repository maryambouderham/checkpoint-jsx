import React, { Component } from "react";
import image from "./images/imageInSrc.jpg"
import "./App.css";

function App () {
  
    return (
      <>
     <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src="{image}" />
    <br />
    <img src="/images/imageInPublic.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

</>
    );
  
}

export default App;
