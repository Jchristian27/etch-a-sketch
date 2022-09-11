let gridSizeBtn = document.querySelector("#grid-size-btn");
let eraseBtn = document.querySelector("#erase-btn");
let grid = document.querySelector('.grid-main-body-grid');
let newDivs = document.querySelectorAll('.newDiv');
let innerDivs = document.querySelectorAll('.innerDiv');

function makeGrid(num) {
  height = 550/num;
  width = 550/num;
  for (i = 0; i < num; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add("newDiv");
    newDiv.style.margin= "0";
    newDiv.style.height = `${height}px`;
    newDiv.style.width = `550px`;
    grid.appendChild(newDiv);
    for (j = 0; j < num; j++) {
      let innerDiv = document.createElement('div');
      innerDiv.classList.add("innerDiv");
      innerDiv.style.margin= "0";
      innerDiv.style.height = `${height}px`;
      innerDiv.style.width = `${width}px`;
      innerDiv.addEventListener('mouseover', function() {
        innerDiv.style.backgroundColor = 'black';
      });
      newDiv.appendChild(innerDiv);
    }
  }
  
}

window.onload = makeGrid(50);

function changeGridSize() {
  let num = window.prompt('Enter a number between 1 and 50 to change the grid size.');
  makeGrid(num);
}

function erase() {
  window.alert('It worked');
}

gridSizeBtn.addEventListener('click', function() {
  changeGridSize();
});

eraseBtn.addEventListener('click', function() {
  erase();
});