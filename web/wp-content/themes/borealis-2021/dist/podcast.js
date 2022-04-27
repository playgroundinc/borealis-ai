/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/js/scripts/podcast.js ***!
  \***********************************/
function podcast() {
  const audioPlayer = document.querySelector(".audio-player");
  const podcastUrl = document.querySelector("audio")?.children[0].src;
  const audio = new Audio(podcastUrl);
  audio.addEventListener("loadeddata", () => {
    if (audioPlayer.querySelector(".time .length") !== null) {
      audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
    }
  }, false);

  if (audioPlayer) {
    const timeline = audioPlayer.querySelector(".timeline");
    timeline.addEventListener("click", e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
    }, false);
    setInterval(() => {
      const progressBar = audioPlayer.querySelector(".progress");
      progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
      audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);
    }, 500);
    const playBtn = audioPlayer.querySelector(".controls .toggle-play");
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        playBtn.classList.remove("pl-1");
        playBtn.children[0].classList.add("hidden");
        playBtn.children[1].classList.remove("hidden");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        playBtn.classList.add("pl-1");
        playBtn.children[1].classList.add("hidden");
        playBtn.children[0].classList.remove("hidden");
        audio.pause();
      }
    }, false);

    function getTimeCodeFromNum(num) {
      let seconds = parseInt(num);
      let minutes = parseInt(seconds / 60);
      seconds -= minutes * 60;
      const hours = parseInt(minutes / 60);
      minutes -= hours * 60;
      if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
      return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }
  }
}

podcast();
/******/ })()
;
//# sourceMappingURL=podcast.js.map