onload = () => {
  document.body.classList.remove("container");
};

const audio = document.getElementById('background-music');
const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '❤️'; // Cambiado para usar solo el emoji
  } else {
    audio.pause();
    playButton.innerHTML = '❤️'; // Cambiado para usar solo el emoji
  }
});

