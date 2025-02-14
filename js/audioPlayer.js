/* Creación y configuración del audio */
var audio = new Audio("./music/musica.mp3");
audio.loop = true;

/* Función para alternar play y pausa */
document.getElementById("playPauseBtn").addEventListener("click", function() {
  if(audio.paused) {
    audio.play();
    this.textContent = "Pause";
  } else {
    audio.pause();
    this.textContent = "Play";
  }
});

/* Actualización de la barra de progreso */
audio.addEventListener("timeupdate", function() {
  var progress = document.getElementById("progress");
  if (audio.duration) {
    progress.style.width = (audio.currentTime / audio.duration * 100) + "%";
  }
});

/* Permitir cambiar la posición al hacer clic en la barra */
document.getElementById("progressBar").addEventListener("click", function(e) {
  var rect = this.getBoundingClientRect();
  var clickPos = e.clientX - rect.left;
  var width = rect.width;
  var percent = clickPos / width;
  audio.currentTime = percent * audio.duration;
});
