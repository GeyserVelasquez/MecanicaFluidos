let rocola = document.getElementById("rocola");
let radio = document.getElementById("radio");
radio.addEventListener("change", function () {
  let selectedSong = this.options[this.selectedIndex];
  rocola.src = selectedSong.value;
});
