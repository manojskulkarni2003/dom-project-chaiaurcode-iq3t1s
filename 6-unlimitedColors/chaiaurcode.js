function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Red component
  const g = Math.floor(Math.random() * 256); // Green component
  const b = Math.floor(Math.random() * 256); // Blue component
  return `rgb(${r}, ${g}, ${b})`;
}

let l;
let t=false;
const p = document.getElementById('start');
const func = () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
};
p.addEventListener('click', function () {
  if(!t)
  {
    l = setInterval(func, 1000);
    t=true;
  }
});

const y = document.getElementById('stop');
y.addEventListener('click', () => {
  clearInterval(l);
  t=false;
});
