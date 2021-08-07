import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Chat from "../../components/footer/Chat";
import TopButton from "../../components/topButton/TopButton";
import Sound from 'react-sound';
import Lagu from './lagu.mp3'

class Home extends Component {
  render() {
    return (
      <div>
        <Sound
          url={Lagu}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Chat theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
