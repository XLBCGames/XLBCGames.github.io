window.onload = function() {
  var videoElement = document.getElementById('video-player');
  var rtmpUrl = 'rtmp://frp-man.top:12117/live';

  if (videoElement.canPlayType('application/x-mpegURL') !== '') {
    // 支持 HLS
    videoElement.src = rtmpUrl + '/playlist.m3u8';
  } else if (videoElement.canPlayType('application/vnd.apple.mpegURL') !== '') {
    // 支持 Safari 的 HLS
    videoElement.src = rtmpUrl + '/playlist.m3u8';
  } else if (videoElement.canPlayType('application/octet-stream') !== '') {
    // 支持 RTMP
    videoElement.src = rtmpUrl;
  } else {
    console.error('无法播放 RTMP 流');
  }
};
