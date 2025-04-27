document.getElementById("lyrics-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const artist = document.getElementById("artist").value.trim();
  const title = document.getElementById("title").value.trim();
  const lyricsEl = document.getElementById("lyrics");

  if (!artist || !title) {
    lyricsEl.textContent = "Please enter both artist and song title.";
    return;
  }

  lyricsEl.textContent = "Loading lyrics... 🎵";

  const button = document.querySelector("button");
  button.disabled = true;
  button.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
  
  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      if (!res.ok) throw new Error("Lyrics not found.");
      return res.json();
    })
    .then(data => {
      lyricsEl.textContent = data.lyrics || "Sorry, no lyrics available.";
    })
    .catch(err => {
      lyricsEl.textContent = "Sorry, lyrics not found.";
    })
    .finally(() => {
      button.disabled = false;
      button.innerHTML = `Get Lyrics`;
    });
});
/**
 * ======================================================
 * 🎵 Lyrics Finder Project 🎵
 * 
 * A simple app to search for song lyrics by artist and title.
 * Built with vanilla JavaScript, HTML5, and Bootstrap5.
 * 
 * - Fetches lyrics from the Lyrics.ovh API
 * - Displays lyrics neatly inside a styled card
 * - Shows notifications for success and errors
 * - Responsive and clean design
 * 
 * Author: [Cemal İgrek]
 * Github: https://github.com/Cemal-igrek
 * ======================================================
 */