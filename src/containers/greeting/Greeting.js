import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                Pak <mark data-entity="">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Dosen Mankeu")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Wakil Ketua MoF-DAC")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Dosen Keren")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Bismillah Aktivitas")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Hehe")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  Kami <mark data-entity="">Kelas 4-02</mark> Mengucapkan{" "}
                  <mark data-entity="">Terima Kasih</mark> Atas Ilmu yang Bapak
                  Berikan Kepada Kami{" "}
                  <mark data-entity="">Selama Satu Semester Ini</mark> dan Mohon
                  Maaf Apabila{" "}
                  <mark data-entity="">Kami Memiliki Kesalahan</mark> Semoga
                  Sehat Selalu Pak!
                  <mark data-entity="">
                    Semoga Berjumpa di Lain Kesempatan Pak! (Emot Sungkem)
                  </mark>
                </div>
              </span>
              {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              {/* <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
    
  );
}
