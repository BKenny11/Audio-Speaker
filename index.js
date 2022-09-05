


var aCtx;
var analyser;
var microphone;
var startbtn = document.getElementById('StartButton');

function startRecording() {
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  if (!aCtx) {
    if (navigator.getUserMedia) {
      startbtn.innerHTML = "Stop Recording";
      navigator.getUserMedia(
        { audio: true },
        function (stream) {
          aCtx = new AudioContext();
          microphone = aCtx.createMediaStreamSource(stream);

          var destination = aCtx.destination;
          microphone.connect(destination);
        },
        function () { console.log("Error 003.") }
      );
    }
  } else {
    startbtn.innerHTML = "Start Recording";
    aCtx.close();
    aCtx = undefined;
    microphone = undefined;
  }
}


function searching() {
  console.log("test");
  let response = await fetch('https://www.googleapis.com/youtube/v3/search');
  let data = await response.json();
  console.log(data);
}


// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }