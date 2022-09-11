let gridSizeBtn = document.querySelector("#grid-size-btn");
let eraseBtn = document.querySelector("#erase-btn");

function makeGrid() {

}

function changeGridSize() {
  window.prompt('Enter a number between 16 and 64 to change the grid size.');
}

function erase() {
  window.alert('It works');
}

gridSizeBtn.addEventListener('click', function() {
  changeGridSize();
});

eraseBtn.addEventListener('click', function() {
  erase();
})
