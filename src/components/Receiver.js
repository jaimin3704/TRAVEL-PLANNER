// src/components/Receiver.js
import React, { useRef, useState } from 'react';
import Peer from 'simple-peer';

const Receiver = () => {
  const [signalData, setSignalData] = useState('');
  const [peerSignal, setPeerSignal] = useState('');
  const myVideo = useRef();
  const partnerVideo = useRef();

  const joinCall = async () => {
    if (!peerSignal || peerSignal.trim() === '') {
      alert('Please paste the valid signaling code.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      myVideo.current.srcObject = stream;

      const peer = new Peer({ initiator: false, trickle: false, stream });
      peer.signal(JSON.parse(peerSignal)); // Use the signaling code provided by Peer A
      peer.on('signal', (data) => {
        setSignalData(JSON.stringify(data)); // This is the signaling code Peer B should share back with Peer A
      });
      peer.on('stream', (remoteStream) => {
        partnerVideo.current.srcObject = remoteStream;
      });
    } catch (error) {
      console.error('Error joining call:', error);
      alert('Could not access camera or microphone. Please check permissions.');
    }
  };

  return (
    <div>
      <h2>Join Call (Receiver)</h2>
      <video ref={myVideo} autoPlay muted style={{ width: '300px' }} />
      <video ref={partnerVideo} autoPlay style={{ width: '300px' }} />
      <textarea
        placeholder="Paste the signal code here"
        value={peerSignal}
        onChange={(e) => setPeerSignal(e.target.value)}
        rows="6"
        cols="50"
      />
      <button onClick={joinCall}>Join Call</button>
      {signalData && (
        <div>
          <h4>Share this Signal Code Back with Your Partner:</h4>
          <textarea value={signalData} readOnly rows="6" cols="50" />
        </div>
      )}
    </div>
  );
};

export default Receiver;
