// src/components/Initiator.js
import React, { useRef, useState } from 'react';
import Peer from 'simple-peer';

const Initiator = () => {
  const [signalData, setSignalData] = useState('');
  const myVideo = useRef();

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      myVideo.current.srcObject = stream;

      const peer = new Peer({ initiator: true, trickle: false, stream });
      peer.on('signal', (data) => {
        setSignalData(JSON.stringify(data)); // This is the signaling code you share with Peer B
      });
    } catch (error) {
      console.error('Error starting call:', error);
      alert('Could not access camera or microphone. Please check permissions.');
    }
  };

  return (
    <div>
      <h2>Start Call (Initiator)</h2>
      <video ref={myVideo} autoPlay muted style={{ width: '300px' }} />
      <button onClick={startCall}>Start Call</button>
      {signalData && (
        <div>
          <h4>Share this Signal Code with Your Partner:</h4>
          <textarea value={signalData} readOnly rows="6" cols="50" />
        </div>
      )}
    </div>
  );
};

export default Initiator;
