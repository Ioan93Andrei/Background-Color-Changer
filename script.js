const button = document.querySelector("#main_button");

function randomColor(){
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeBackground(){
  document.body.style.backgroundColor = randomColor();
};

function createParagraph(){
  let color = randomColor();
  const div = document.querySelector(".container");
  let par = document.createElement("p");
  par.innerHTML = "Current color is " + color;
  div.appendChild(par);
}

button.addEventListener("click", changeBackground);
button.addEventListener("click", createParagraph);