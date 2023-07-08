window.addEventListener('load', function() {
    var loaderElement = document.getElementById('video-vanish');
    loaderElement.style.top="-1000px";
  });
  
  
  window.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
  
      if (percentComplete >= 80) {
        // Apply animation to loader element
        var loaderElement = document.getElementById('video-vanish');
        loaderElement.classList.add('animation');
        
      }
    }
  });
  
