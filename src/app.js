import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

const button = document.querySelector('.note-button');

const handleClick = () => {
    synth.triggerAttackRelease('c3', '8n')
}

button.addEventListener('click', handleClick)

console.log('hello world')