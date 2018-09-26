import * as React from 'react';
const Tone = require("Tone");

export default class NoteButton extends React.PureComponent<any, any> {

  private synth: any  = null;
  private readonly name: string = '';
  private readonly note: string = '';
  private readonly noteLength: string = '';

  constructor(props: any) {
    super(props);

    this.name = this.props.name;
    this.note = this.props.note;
    this.noteLength = this.props.noteLength;
    this.synth = this.props.synth;
    console.log(this.props.synth)
  }

  componentDidMount(props: any) {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();
  }

  btnToneClicked = (event: any) => {

    event.preventDefault();

    const note = event.target.dataset.note;
    const noteLength = event.target.dataset.notelength;

    console.log('playing note ', note, noteLength);

    this.synth.triggerAttackRelease(note, noteLength);
  };

  render() {
    return (
      <div>

        <input
          type={'button'}
          onClick={(e) => this.btnToneClicked(e)}
          value={this.name}
          data-note={this.note}
          data-noteLength={this.noteLength}
        />

      </div>
    );
  }
}
