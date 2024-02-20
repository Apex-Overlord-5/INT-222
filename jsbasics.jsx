function changeColor(event) {
  if (event.detail === 1) {
      // Single click
      document.body.style.backgroundColor = 'green';
  } else if (event.detail === 2) {
      // Double click
      document.body.style.backgroundColor = 'red';
  }
}
document.body.addEventListener('click', changeColor);

document.body.addEventListener('dblclick', changeColor);