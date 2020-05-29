// setup canvas

const canvas = document.querySelector(".ball-result");
const ctx = canvas.getContext("2d");

const width = (canvas.width = canvas.parentElement.clientWidth);
const height = (canvas.height = canvas.parentElement.clientHeight);

// function to generate random number
let hexToRgb = function (color) {
  return `${parseInt(color[1] + color[2], 16)}, ${parseInt(
    color[3] + color[4],
    16
  )}, ${parseInt(color[5] + color[6], 16)}`;
};

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};
let balls = [];

function loop() {
  let ballNumber = document.querySelector(".ball-number").value;
  let ballOpacity = document.querySelector(".ball-opacity-range").value;
  let color = document.querySelector(".ball-color").value;
  ctx.fillStyle = `rgba(${hexToRgb(color)}, ${ballOpacity})`;
  ctx.fillRect(0, 0, width, height);

  while (balls.length < ballNumber) {
    let ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      "rgb(" +
        random(0, 255) +
        "," +
        random(0, 255) +
        "," +
        random(0, 255) +
        ")",
      random(10, 20)
    );
    balls.push(ball);
  }
  if (balls.length > ballNumber) {
    balls.length = ballNumber;
  }
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  let animeBall = requestAnimationFrame(loop);
  stopBall.addEventListener("click", function () {
    cancelAnimationFrame(animeBall);
    ballButton.disabled = false;
    stopBall.disabled = true;
    this.hidden;
  });
}
let ballSpeedUp = document.createElement("input");
let ballSpeedDown = document.createElement("input");
let ballSetup = document.querySelectorAll(".ball-setup");

let stopBall = document.createElement("input");
let ballButton = document.querySelector(".ball-button");
ballButton.addEventListener("click", function () {
  loop();
  ballButton.disabled = true;
  stopBall.disabled = false;
  ballSpeedUp.type = ballSpeedDown.type = stopBall.type = "button";
  ballSpeedUp.value = "speed up";
  ballSpeedDown.value = "speed down";
  stopBall.value = "Stop";
  ballSetup[1].append(ballSpeedUp);
  ballSetup[1].append(ballSpeedDown);
  ballSetup[0].append(stopBall);
});

ballSpeedUp.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].velX > 0) {
      balls[i].velX += 1;
      balls[i].velY += 1;
    } else {
      balls[i].velX -= 1;
      balls[i].velY -= 1;
    }
    if (balls[i].velX > 2 || balls[i].velY > 2) {
      ballSpeedDown.disabled = false;
    }
  }
});
ballSpeedDown.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].velX > 0) {
      balls[i].velX -= 1;
      balls[i].velY -= 1;
    } else {
      balls[i].velX += 1;
      balls[i].velY += 1;
    }
    if (balls[i].velX < 2 && balls[i].velY < 2) {
      ballSpeedDown.disabled = true;
    }
  }
});
