let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');

// Color generator

function randomColorGenerator() {

  const colorCode = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ];

  let color = '#';

  for (let i = 0; i < 6; i++) {
    let randomCode = Math.floor(Math.random() * 16);
    color += colorCode[randomCode];
  }

  return color;

}

// Change background on click

function handleClick() {
  let color = randomColorGenerator();  
  box1.style.backgroundColor = color;
}

box1.addEventListener("click", handleClick);

// Change background on double click

function handleDoubleClick() {
  let color = randomColorGenerator();
  box2.style.backgroundColor = color;
  console.log(color);
}

box2.addEventListener("dblclick", handleDoubleClick);

// Change background on double click

function handleMouseMove() {
  let color = randomColorGenerator();
  box3.style.backgroundColor = color;
  console.log(color);
}

box3.addEventListener("mousemove", handleMouseMove);

// Change background on mouseup

function handleMouseOut() {
  let color = randomColorGenerator();
  box4.style.backgroundColor = color;
  console.log(color);
}

box4.addEventListener("mouseout", handleMouseOut);