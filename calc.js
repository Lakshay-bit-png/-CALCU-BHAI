
  
  window.addEventListener('progress', function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      var loaderElement = document.getElementById('video-vanish');
  
      if (percentComplete >= 80 && percentComplete <= 100) {

        loaderElement.classList.add('.slide');
      } else if(percentComplete == 100 ) {
      
        loaderElement.classList.remove('.slide');
        loaderElement.style.top="-1000px";
        console.log("1000");      }
    }
  });
  
