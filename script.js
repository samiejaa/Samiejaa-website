document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const muteBtn = document.getElementById("mute-btn");
  
    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      muteBtn.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });
  });

  const cover = document.getElementById('play-cover');
  const audio = document.getElementById('cover-audio');

  cover.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset for replay
    }
  });