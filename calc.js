
  
  window.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
  
      if (percentComplete >= 80) {
        // Apply animation to loader element
        var loaderElement = document.getElementById('video-vanish');
        loaderElement.classList.add('.slide');
        loaderElement.style.top='-1000px';
      }
    }
  });
  
