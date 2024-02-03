import React, { useState } from 'react';
import * as Tone from 'tone';

const PolyRhythms = () => {
  const [rhythms, setRhythms] = useState([
    { note: 'A4', duration: '1n', pace: '4m', startOffset: 0 }, // F2 plays every 5 measures, whole note duration
    { note: 'B4', duration: '2n', pace: '13m', startOffset: 0 }, // Ab3 plays every 7 measures, half note duration, starts after 1 measure
    { note: 'Ab4', duration: '4n', pace: '5m', startOffset: 0 }, // C4 plays every 11 measures, quarter note duration, starts after 2 measures
    { note: 'Eb4', duration: '8n', pace: '9m', startOffset: 0 }, // Eb4 plays every 13 measures, eighth note duration, starts after 3 measures
    { note: 'Gb4', duration: '16n', pace: '11m', startOffset: 0 }, // F4 plays every 17 measures, sixteenth note duration, starts after 4 measures
  ]);
  const [playing, setPlaying] = useState(false);
  const [synths, setSynths] = useState([]);
  const [loops, setLoops] = useState([]);

  const playPolyRhythms = async (rhythms) => {
    await Tone.start(); // Ensure the AudioContext is started

    // Clear any existing synths and loops
    stopPolyRhythms(); // This will stop and clear previous synths and loops
    setPlaying(true);

    // Create a limiter and place it at the end of the signal chain
    const limiter = new Tone.Limiter(-3).toDestination(); // -1 dB threshold to prevent clipping

    // Create a compressor and route all synths through it before going to the destination
    const compressor = new Tone.Compressor({
      threshold: -30, // Lower threshold means more of the signal will be compressed
      ratio: 6, // Higher ratio for more intense compression
      attack: 0.01, // Faster attack to quickly clamp down on loud sounds
      release: 0.25, // Shorter release to quickly return to normal after loud sounds
    }).connect(limiter);

    // Create a hi-hat metronome
    const hiHat = new Tone.NoiseSynth({
      volume: -15, // Adjust the volume as needed
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0,
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.03,
        baseFrequency: 4000, // High-pass filter for a sharper hi-hat sound
        octaves: -2.5,
      },
    }).connect(compressor);

    // Hi-hat loop to act as a metronome, playing every quarter note
    const hiHatLoop = new Tone.Loop((time) => {
      hiHat.triggerAttackRelease('16n', time);
    }, '4n').start(0);

    setSynths((currentSynths) => [...currentSynths, hiHat]);
    setLoops((currentLoops) => [...currentLoops, hiHatLoop]);

    // Function to create a synth and a loop for a given rhythm configuration
    const createRhythm = ({ note, duration, pace, startOffset }) => {
      const synth = new Tone.MonoSynth({
        oscillator: {
          type: 'triangle',
        },
        envelope: {
          attack: 0.1, // Fast attack to start the note sharply
          decay: 0.3, // A bit of decay to add some texture after the initial attack
          sustain: 0.4, // Sustain at a lower level to let the note linger a bit
          release: 2, // Longer release for a fade-out effect
        },
        filterEnvelope: {
          attack: 0.5,
          decay: 0.5,
          sustain: 0.5, // Sustain level for the filter envelope
          release: 2, // Longer release for the filter envelope
          baseFrequency: 200, // Starting frequency of the filter
          octaves: 3, // The filter will sweep across 3 octaves
        },
      }).connect(compressor);
      setSynths((currentSynths) => [...currentSynths, synth]); // Add the synth to the array for later access

      const loop = new Tone.Loop((time) => {
        synth.triggerAttackRelease(note, duration, time);
      }, pace).start(startOffset);

      setLoops((currentLoops) => [...currentLoops, loop]); // Add the loop to the array for later access
    };

    // Create a rhythm for each configuration in the rhythms array
    rhythms.forEach(createRhythm);

    // Start the Transport to play the loops
    Tone.Transport.bpm.value = 150;
    Tone.Transport.start();
  };

  const stopPolyRhythms = () => {
    setPlaying(false);
    // Stop the Transport
    Tone.Transport.stop();

    // Dispose of all synths and loops to free up resources
    synths.forEach((synth) => synth.dispose());
    loops.forEach((loop) => loop.dispose());

    // Clear the arrays
    setSynths([]);
    setLoops([]);
  };

  return (
    <>
      <h2>Tone</h2>
      {!playing ? (
        <button
          className="bg-gray-500 rounded p-2"
          onClick={() => playPolyRhythms(rhythms)}
        >
          Play
        </button>
      ) : (
        <button
          className="bg-gray-500 rounded p-2"
          onClick={() => stopPolyRhythms(rhythms)}
        >
          Stop
        </button>
      )}
      <div></div>
    </>
  );
};

export default PolyRhythms;
