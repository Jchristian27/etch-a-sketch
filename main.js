let number = 16;
let grid = document.querySelector('.grid-main-body-grid');
let gridSizeBtn = document.querySelector("#grid-size-btn");
let eraseBtn = document.querySelector("#erase-btn");

function makeGrid(num) {
  number = num
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

window.onload = makeGrid(number);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function changeGridSize() {
  let number = window.prompt('Enter a number between 1 and 64 to change the grid size.');
  if (number === null) {
    removeAllChildNodes(grid);
    makeGrid(16);
  } else if (number < 1 || number > 64) {
      number = 16;
      alert("You entered an invalid number. Please try again.");
      changeGridSize();
  } else if (number > 1 && number < 65) {
      removeAllChildNodes(grid);
      makeGrid(number);
  } else {
    alert("An error occured. Please try again.");
      removeAllChildNodes(grid);
      makeGrid(16);
  }
}

gridSizeBtn.addEventListener('click', function() {
  changeGridSize();
});

eraseBtn.addEventListener('click', function() {
  removeAllChildNodes(grid);
  makeGrid(number);
});