function changeColor(event) {
  if (event.detail === 1) {
      // Single click
      document.body.style.backgroundColor = 'green';
  } else if (event.detail === 2) {
      // Double click
      document.body.style.backgroundColor = 'red';
  }
}

// Event listener for single click
document.body.addEventListener('click', changeColor);

// Event listener for double click
document.body.addEventListener('dblclick', changeColor);