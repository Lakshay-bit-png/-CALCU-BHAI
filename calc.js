
window.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    var percentComplete = (event.loaded / event.total) * 100;

    if (percentComplete >= 80 && percentComplete < 100 && !startTimestamp) {
      // Start measuring time when 80% loading progress is reached
      document.getElementById('video-vanish').style.animation = 'slide-up';
      document.getElementById('video-vanish').style.top="-1000px";
      
    }

    
  }
});
