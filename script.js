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

  const searchInput = document.getElementById('search-input');
  const albums = document.querySelectorAll('.album');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    albums.forEach(album => {
      const title = album.querySelector('.song-title').textContent.toLowerCase();
      album.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
  });
