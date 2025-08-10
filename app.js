// a test with javascript for making circles

// Fit the canvas to the screen (with HiDPI/retina support)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2); // cap for perf
  canvas.width  = Math.floor(innerWidth  * dpr);
  canvas.height = Math.floor(innerHeight * dpr);
  canvas.style.width  = innerWidth + 'px';
  canvas.style.height = innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
}
addEventListener('resize', resize);
resize();

// Simple circle data
const circles = [
  { x: 140, y: 120, r: 22,  color: 'rgba(130,209,255,0.9)' }, // cyan
  { x: 320, y: 240, r: 34,  color: 'rgba(193,255,130,0.9)' }, // lime
  { x: 520, y: 180, r: 16,  color: 'rgba(255,255,255,0.9)' }, // white
  { x: 220, y: 360, r: 28,  color: 'rgba(130,209,255,0.9)' },
  { x: 420, y: 420, r: 20,  color: 'rgba(193,255,130,0.9)' }
];

function drawCircles() {
  // background
  ctx.fillStyle = '#0f1420';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // glow + core for each circle
  for (const c of circles) {
    // outer glow
    ctx.beginPath();
    ctx.fillStyle = c.color.replace('0.9', '0.12');
    ctx.arc(c.x, c.y, c.r * 2.2, 0, Math.PI * 2);
    ctx.fill();
    // core
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

drawCircles();
