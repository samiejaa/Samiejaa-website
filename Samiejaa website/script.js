document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const muteBtn = document.getElementById("mute-btn");
  
    muteBtn.addEventListener("click", () => {
      audio.muted = !audio.muted;
      muteBtn.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });
  });

  const toggle = document.querySelector('.menu-toggle');
const navContent = document.querySelector('.nav-content');

toggle.addEventListener('click', () => {
  navContent.classList.toggle('active');
});
