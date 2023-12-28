window.onload = function() {
  if (flvjs.isSupported()) {
    var videoElement = document.getElementById('rtmp-player');
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: 'rtmp://your-rtmp-stream-url'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }
};
