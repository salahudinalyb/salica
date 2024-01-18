function playPauseToggle() {
    let track = document.getElementById("track");
    var icon = $("#music-controller-icon");
    if (track.paused) {
      track.play();
      icon.attr("src","../../src/icon/play.svg");
    } else {
      track.pause();
      icon.attr("src","../src/icon/muted.svg");
    }
  };