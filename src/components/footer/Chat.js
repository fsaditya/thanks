import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Foto from "./chat.png";
import Zoom from "./zoom.png";
import Typewriter from "typewriter-effect";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Chat(props) {
  return (
    <div>
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          <img src={Foto} alt="First" />
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
      <Fade>
        <p className="footer-text" style={{ color: props.theme.text }}>
          <img src={Zoom} alt="First" />
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
      <center>
        <div>
          {" "}
          <h1 className="greeting-typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Farhan Nangis Depan Pintu")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Royan Datang Menenangkan")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Terima Kasih Pak Sindhu!")
                  .pauseFor(200)
                  .deleteAll()
                  .typeString("Atas Ilmu yang Diberikan")
                  .pauseFor(200)
                  .start();
              }}
              options={{
                autoStart: false,
                loop: true,
              }}
            />
          </h1>
        </div>
      </center>
    </div>
  );
}
