window.onload = function() {
  if (flvjs.isSupported()) {
    var videoElement = document.getElementById('rtmp-player');
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: 'rtmp://frp-man.top:12117/live'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }
};
