const button = document.querySelector("#main_button");

function randomColor(){
  let letters = "0123456789ABCDEF";
  let hash = "#";
  for(let i = 0; i < 6; i++){
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash;
};

let color = randomColor();

function changeBackground(){
  let current_color = document.body.style.backgroundColor = randomColor();
  return current_color
};

function editParagraph(){
  let par = document.querySelector(".color_par");
  color = document.body.style.backgroundColor;
  par.innerHTML = "Current color is " + color;
}

button.addEventListener("click", randomColor);
button.addEventListener("click", changeBackground);
button.addEventListener("click", editParagraph);
console.log(randomColor());