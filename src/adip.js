const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const recordingsList = document.getElementById('recordingsList');
let mediaRecorder;
let audioChunks = [];

// Start recording
recordButton.addEventListener('click', async () => {
  // Request access to the microphone
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);
  
  // Start recording
  mediaRecorder.start();
  recordButton.disabled = true;
  stopButton.disabled = false;
  
  // Collect audio data
  mediaRecorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const listItem = document.createElement('li');
    const audio = document.createElement('audio');
    const link = document.createElement('a');

    // Configure audio element and download link
    audio.controls = true;
    audio.src = audioUrl;
    link.href = audioUrl;
    link.download = 'recording.wav';
    link.textContent = 'Download Recording';
    
    // Append audio element and link to the list
    listItem.appendChild(audio);
    listItem.appendChild(link);
    recordingsList.appendChild(listItem);
    
    // Reset for new recordings
    audioChunks = [];
    recordButton.disabled = false;
    stopButton.disabled = true;
  };
});

// Stop recording
stopButton.addEventListener('click', () => {
  mediaRecorder.stop();
});

// Video seeking event
const videoElement = document.getElementById('myVideo');
videoElement.addEventListener('seeking', () => {
  console.log('Seeking event triggered at time:', videoElement.currentTime, 'seconds');
});
