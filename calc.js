
  
  window.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      var loaderElement = document.getElementById('video-vanish');
  
      if (percentComplete >= 80 ) {
       
        loaderElement.style.animation= 'slide-up';
        loaderElement.style.top="-1000px";
      }
    }
  });
  
