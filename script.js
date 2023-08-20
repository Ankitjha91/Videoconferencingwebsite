// script.js
const startButton = document.getElementById('startButton');
const endButton = document.getElementById('endButton');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

startButton.addEventListener('click', startCall);
endButton.addEventListener('click', endCall);

async function startCall() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = stream;
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

function endCall() {
  const stream = localVideo.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(track => track.stop());
  localVideo.srcObject = null;
}
