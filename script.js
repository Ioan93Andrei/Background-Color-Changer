// Is OK to be globally accessible
function randomColor(){
  let letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}

// Should be placed inside an IIFE; the global context is still accessible
(function() {
  const button = document.querySelector('#main_button');
  const pElement = document.querySelector('#p_id');

  button.addEventListener('click', function() {
    let color = randomColor();
    document.body.style.background = color;
    pElement.textContent = 'Current Color is ' + color;
  });
})();