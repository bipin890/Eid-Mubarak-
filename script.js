// Typing Animation
const text = "Eid Mubarak to you and your family!";
let index = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Confetti
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function createParticle() {
  const colors = ["#fcd34d", "#22c55e", "#ec4899", "#3b82f6", "#a855f7"];
  return {
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 8 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: Math.random() * 3 + 2,
    speedX: (Math.random() - 0.5) * 4,
  };
}

function updateParticles() {
  particles.forEach(p => {
    p.y += p.speedY;
    p.x += p.speedX;
  });
  particles = particles.filter(p => p.y < canvas.height);
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

function animate() {
  updateParticles();
  drawParticles();
  requestAnimationFrame(animate);
}
animate();

document.getElementById("celebrateBtn").addEventListener("click", () => {
  for (let i = 0; i < 150; i++) {
    particles.push(createParticle());
  }
});