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
    const note = event.target.dataset.note;
    const noteLength = event.target.dataset.notelength;

    console.log('playing note ', note, noteLength);

    this.synth.triggerAttackRelease(note, noteLength);
  };

  btnHowlerClicked = (event) => {
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

        <h2>Welcome to my music maker!</h2>

        <input type={'button'} onClick={this.btnHowlerClicked} value={'Howler'} />

        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note C4 1/8'} data-note={'C4'} data-noteLength={'8n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note C4 1/4'} data-note={'C4'} data-noteLength={'4n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note C4 1/2'} data-note={'C4'} data-noteLength={'2n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note C4 1/1'} data-note={'C4'} data-noteLength={'1n'} />

        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note E4 1/8'} data-note={'E4'} data-notelength={'8n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note E4 1/4'} data-note={'E4'} data-notelength={'4n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note E4 1/2'} data-note={'E4'} data-notelength={'2n'} />
        <input type={'button'} onClick={(e) => this.btnToneClicked(e)} value={'Note E4 1/1'} data-note={'E4'} data-notelength={'1n'} />

      </div>
    );
  }
}
