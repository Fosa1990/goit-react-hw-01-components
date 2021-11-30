function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  return backgroundColor;
}

export default getRandomColor;
