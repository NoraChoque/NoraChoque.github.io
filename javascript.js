const img = document.querySelector('.imagen-ajustada');

let angle = 0;
function rotate() {
  angle += 0.05; 
  img.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}
rotate();

document.addEventListener("DOMContentLoaded", function () {
  var videoModal = document.getElementById('videoModal');
  var video = document.getElementById('video');

  videoModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var videoSrc = button.getAttribute('data-src');
    video.setAttribute('src', videoSrc + "?autoplay=1&modestbranding=1&rel=0");
  });

  videoModal.addEventListener('hidden.bs.modal', function () {
    video.setAttribute('src', "");
  });
});