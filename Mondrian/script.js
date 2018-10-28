let blocks = document.getElementsByClassName("dynamic-color")

for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", changeColor)
}

function changeColor (event) {
  let element = event.target;
    if ( element.classList.contains('blue') ) {
      element.classList.toggle('blue')
      element.classList.toggle('red')
    } else if ( element.classList.contains('red') ) {
      element.classList.toggle('red')
      element.classList.toggle('yellow')
    } else if ( element.classList.contains('yellow') ) {
      element.classList.toggle('yellow')
      element.classList.toggle('white')
    } else if ( element.classList.contains('white') ) {
      element.classList.toggle('white')
      element.classList.toggle('blue')
    } else {
      element.classList.toggle('blue')
    }
}
