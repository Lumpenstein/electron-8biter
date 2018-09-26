import * as React from 'react';
import {Howl, Howler} from 'howler';
const Tone = require("Tone");

// Links for guides for making music
// https://codepen.io/gregh/project/editor/aAexRX
// https://codepen.io/gregh/post/recreating-legendary-8-bit-games-music-with-web-audio-api

export default class Main extends React.Component<any, any> {

  private sound = null;
  private synth = null;

  state = {
    playing: false
  };

  componentDidMount(props: any) {

    /* HOWLER.JS */
    this.sound = new Howl({
      src: ['https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3']
    });
    // Change global volume.
    Howler.volume(0.5);

    /* TONE.JS */
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();
  }

  btnToneClicked = (event) => {
    event.preventDefault();

    console.log('playing note');

    //play a middle ‘C’ for the duration of an 8th note
    this.synth.triggerAttackRelease('C4', '8n');

  };

  btnClicked = (event) => {
    // Prevent form submit
    event.preventDefault();

    // Play the sound.
    if (this.state.playing) {
      console.log('Stop');

      this.sound.stop();

      this.setState({
        playing: false
      });

      //this.sound.stop();
    } else {
      console.log('Play');

      this.sound.play();

      this.setState({
        playing: true
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>

        <form onSubmit={this.btnClicked}>
          <button type={'submit'}>Click me</button>
        </form>

        <input type={'button'} onClick={this.btnToneClicked} value={'C4'} />
      </div>
    );
  }
}
