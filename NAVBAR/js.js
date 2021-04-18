var elem = document.getElementById("fullscreen");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

var myVideo = document.getElementById("video");

function playPause() { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 

function show() {
 document.getElementById("mybutton").style.display = "block";
}


var video = document.getElementById('video'),
    jumplink = document.getElementById('jump');

jumplink.addEventListener("click", function (event) {
  event.preventDefault();
  video.play();
  video.pause();
  video.currentTime = 16;
  video.play();
  setTimeout(function() {
    $('#skip').fadeOut('fast');
}, 1000);
}, false);

function Jump() {
  setTimeout(function() {
      $('#jump').fadeOut('fast');
  }, 1000);
}

setTimeout(function() {
  $('#jump').hide();
}, 35000);
