var animationDuration = 2;
var loaderElement = document.getElementById('video-vanish');
var animationInterval;

window.addEventListener('load', function() {
  // Website loaded
  var completionMessage = document.createElement('div');
  completionMessage.textContent = 'Website fully loaded!';
  completionMessage.style.color = '#fff';
  completionMessage.style.fontSize = '24px';
  document.body.appendChild(completionMessage);
});

window.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    var percentComplete = (event.loaded / event.total) * 100;

    if (percentComplete < 100) {
    
      loaderElement.style.animation = `slide-up ${animationDuration}s linear infinite`;
    } else {
      document.getElementById("video-vanish").style.top="-1000px";
      loaderElement.style.animation = 'none';
    }
  }
});

function updateAnimationDuration(newDuration) {
  
  animationDuration = newDuration;
  loaderElement.style.animationDuration = `${animationDuration}s`;
}


animationInterval = setInterval(function() {
  var randomDuration = Math.floor(Math.random() * 4) + 1; 
  updateAnimationDuration(randomDuration);
}, 2000);
