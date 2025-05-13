document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const muteBtn = document.getElementById("mute-btn");
  
    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      muteBtn.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });
  });