var startTime;

window.addEventListener('load', function() {
  

  if (startTime) {
    var loadingTime = performance.now() - startTime;
    var animationDuration = loadingTime / 1000; 
    
  
    document.getElementById('video-vanish').style.animationDuration = animationDuration + 's';
  }
});

window.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    var percentComplete = (event.loaded / event.total) * 100;

    if (percentComplete >= 80 && !startTime) {
        document.getElementById('video-vanish').style.top='-1000px';
      startTime = performance.now();
    }

    if (percentComplete >= 100) {
      
      startTime = null;
    }
  }
});
