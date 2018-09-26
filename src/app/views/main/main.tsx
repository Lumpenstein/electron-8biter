import * as React from 'react';

import {Howl, Howler} from 'howler';
const Tone = require("Tone");

import NoteButton from '../../components/noteButton';

const notes = [
  {id: 'C4-8n', name: 'C4 1/8', note: 'C4', noteLength: '8n'},
  {id: 'C4-4n', name: 'C4 1/4', note: 'C4', noteLength: '4n'},
  {id: 'C4-2n', name: 'C4 1/2', note: 'C4', noteLength: '2n'},
  {id: 'C4-1n', name: 'C4 1', note: 'C4', noteLength: '1n'},
  {id: 'G4-8n', name: 'G4 1/8', note: 'G4', noteLength: '8n'},
  {id: 'G4-4n', name: 'G4 1/4', note: 'G4', noteLength: '4n'},
  {id: 'G4-2n', name: 'G4 1/2', note: 'G4', noteLength: '2n'},
  {id: 'G4-1n', name: 'G4 1', note: 'G4', noteLength: '1n'},
  ];

// Links for guides for making music
// https://codepen.io/gregh/project/editor/aAexRX
// https://codepen.io/gregh/post/recreating-legendary-8-bit-games-music-with-web-audio-api

export default class Main extends React.Component<any, any> {

  private sound: Howl = null;

  state = {
    playing: false
  };

  componentWillMount(props: any) {

    /* HOWLER.JS */
    this.sound = new Howl({
      src: ['https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3']
    });
    // Change global volume.
    Howler.volume(0.5);
  }

  btnHowlerClicked = (event: any) => {
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

        <input type={'button'} onClick={this.btnHowlerClicked} value={'Cheer yourself up!'} />

        {(notes || []).map(note => {
          return <NoteButton
            key={note.id}
            name={note.name}
            note={note.note}
            noteLength={note.noteLength}
          />
        })}

      </div>
    );
  }
}
