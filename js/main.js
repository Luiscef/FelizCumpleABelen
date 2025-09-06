// Configuración del confeti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettis = [];

function ConfettiPiece() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.size = Math.random() * 8 + 4;
  this.speed = Math.random() * 3 + 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.tilt = Math.random() * 10 - 10;
}

ConfettiPiece.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = -10;
    this.x = Math.random() * canvas.width;
  }
};

ConfettiPiece.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.size, this.size);
  ctx.closePath();
};

function init() {
  confettis = [];
  for (let i = 0; i < 75; i++) {
    confettis.push(new ConfettiPiece());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach((c) => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();
