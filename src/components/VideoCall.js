import React, { useRef, useState } from 'react';
import Peer from 'simple-peer';
import './VideoCall.css'; // Import the CSS file

const VideoCall = () => {
  const [peer, setPeer] = useState(null);
  const [signalData, setSignalData] = useState('');
  const [passcode, setPasscode] = useState('');  // State for storing the generated passcode
  const myVideo = useRef();
  const userVideo = useRef();

  // Function to generate a unique passcode
  const generatePasscode = () => {
    return Math.random().toString(36).substr(2, 6).toUpperCase(); // Generate 6-character passcode
  };

  const startCall = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    myVideo.current.srcObject = stream;

    const newPeer = new Peer({ initiator: true, trickle: false, stream });

    newPeer.on('signal', (data) => {
      setSignalData(JSON.stringify(data)); // Save the signal data, which will be shared with others
    });
    newPeer.on('stream', (remoteStream) => {
      userVideo.current.srcObject = remoteStream;
    });

    // Generate the unique passcode and set it in the state
    const newPasscode = generatePasscode();
    setPasscode(newPasscode); // Update passcode state to trigger UI update

    setPeer(newPeer); // Set peer to state to indicate that the call has started
  };

  const joinCall = async (signal) => {
    if (!signal || signal.trim() === "") {
      alert("Signal data cannot be empty. Please paste valid signal data.");
      return;
    }

    try {
      const parsedSignal = JSON.parse(signal);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      myVideo.current.srcObject = stream;

      const newPeer = new Peer({ initiator: false, trickle: false, stream });
      newPeer.signal(parsedSignal); // Use the signal data from the other person

      newPeer.on("stream", (remoteStream) => {
        userVideo.current.srcObject = remoteStream;
      });

      setPeer(newPeer); // Set peer state to indicate that the call has started
    } catch (error) {
      console.error("Error parsing signal data:", error);
      alert("There was an error with the signal data. Please try again.");
    }
  };

  return (
    <div className="video-call-container">
      <h2>Virtual Group Travel</h2>
      <div className="video-call-grid">
        <div className="video-container">
          <h4>Your Video</h4>
          <video ref={myVideo} autoPlay muted className="video" />
        </div>
        <div className="video-container">
          <h4>Partner's Video</h4>
          <video ref={userVideo} autoPlay className="video" />
        </div>
      </div>

      {/* Display actions if no peer connection is active */}
      {!peer && (
        <div className="call-actions">
          <button className="button start-button" onClick={startCall}>
            Start Call
          </button>

          {/* Display the passcode if it has been generated */}
          {passcode && (
            <div className="passcode-display">
              <h4>Passcode: {passcode}</h4>
              <p>Share this passcode with your friend so they can join the call.</p>
            </div>
          )}

          <textarea
            rows="4"
            cols="50"
            placeholder="Paste the code you received"
            onChange={(e) => setSignalData(e.target.value)}
            className="signal-input"
          ></textarea>

          <button className="button join-button" onClick={() => joinCall(signalData)}>
            Join Call
          </button>
        </div>
      )}

      {/* Display message if peer connection is active */}
      {peer && <p className="connected-message">Connected! Enjoy your Virtual Travel experience.</p>}
    </div>
  );
};

export default VideoCall;
