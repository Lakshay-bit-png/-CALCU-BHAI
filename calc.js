
  
  window.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      var loaderElement = document.getElementById('video-vanish');
  
      if (percentComplete >= 80 && percentComplete <= 100) {
        // Calculate the animation duration within the desired range
        var totalDuration = 2; // Total duration in seconds
        var animationDuration = ((percentComplete - 80) / 20) * totalDuration;
        loaderElement.style.animation= 'slide-up';
        loaderElement.style.animationDuration = animationDuration + 's';
      } else {
        // Stop the animation if not in the desired range
        loaderElement.style.animation = 'none';
      }
    }
  });
  
