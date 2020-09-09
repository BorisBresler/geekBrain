// setup canvas

const canvas = document.querySelector(".ball-result");
const ctx = canvas.getContext("2d");

const width = (canvas.width = canvas.parentElement.clientWidth);
const height = (canvas.height = canvas.parentElement.clientHeight);

//Перевод из 16ричный системы цвета в rgb
let hexToRgb = function (color) {
  return `${parseInt(color[1] + color[2], 16)}, ${parseInt(
    color[3] + color[4],
    16
  )}, ${parseInt(color[5] + color[6], 16)}`;
};
// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
//конструктор шара
function Ball(x, y, velX, velY, exists, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
  this.color = color;
  this.size = size;
}
// рисуем шар
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
// меняем скорость шара и направление если дошел до края родительского эелемента
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
// менеяем цвета шара если он встречается с другим шаром)
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
//функция запуска шаров
function loop() {
  let ballNumber = document.querySelector(".ball-number").value;
  let ballOpacity = document.querySelector(".ball-opacity-range").value;
  let color = document.querySelector(".ball-color").value;
  ctx.fillStyle = `rgba(${hexToRgb(color)}, ${ballOpacity})`;
  ctx.fillRect(0, 0, width, height);
  // пока количество шаров меньше чем задано создавать новые
  while (balls.length < ballNumber) {
    let ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      true,
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
  // если уменьшили количество шаров после создания, то удалить их из массива
  if (balls.length > ballNumber) {
    balls.length = ballNumber;
  }
  //для всех шаров, нариосовать - привести в движение - включить коллизию при встрече с другими шарами
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  // запусимить анимацию
  let animeBall = requestAnimationFrame(loop);
  // создать кнопку которую при нажатии останавливает шары и активирует кнопку которая их запускает
  stopBall.addEventListener("click", function () {
    cancelAnimationFrame(animeBall);
    ballButton.disabled = false;
    stopBall.disabled = true;
    this.hidden = true;
    ballButton.hidden = false;
  });
}
let ballSpeedUpButton = document.createElement("input");
let ballSpeedDownButton = document.createElement("input");
let ballSetup = document.querySelectorAll(".ball-setup");

let rollButton = document.createElement("input");
let stopBall = document.createElement("input");
let ballButton = document.querySelector(".ball-button");
// кнопка старта добавляет конпки скорости и остановки
//подумать не добавляет ли он хи каждый раз??
ballButton.addEventListener("click", function () {
  loop();
  ballButton.disabled = true;
  ballButton.hidden = true;
  stopBall.disabled = false;
  stopBall.hidden = false;
  rollButton.type = ballSpeedUpButton.type = ballSpeedDownButton.type = stopBall.type =
    "button";
  ballSpeedUpButton.value = "speed up";
  ballSpeedDownButton.value = "speed down";
  stopBall.value = "Stopули красопеточка";
  rollButton.value = "Get rolling left";

  ballSetup[1].append(ballSpeedUpButton);
  ballSetup[1].append(ballSpeedDownButton);
  ballSetup[1].append(rollButton);
  ballSetup[0].append(stopBall);
});
// кнопка увеличения скорости
ballSpeedUpButton.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i += 1) {
    if (balls[i].velX > 0) {
      balls[i].velX += 1;
      balls[i].velY += 1;
    } else {
      balls[i].velX -= 1;
      balls[i].velY -= 1;
    }
    // думал убирать кнопки если скорость
    if (balls[i].velX > 2 || balls[i].velY > 2) {
      ballSpeedDownButton.disabled = false;
    }
  }
});
ballSpeedDownButton.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i += 1) {
    if (balls[i].velX > 0) {
      balls[i].velX -= 1;
      balls[i].velY -= 1;
    } else {
      balls[i].velX += 1;
      balls[i].velY += 1;
    }
    /* думал убирать кнопку если мелкая скорость, но полчается один мелкий шар и всем убрал. 
    if (balls[i].velX < 2 && balls[i].velY < 2) {
      ballSpeedDownButton.disabled = true;
    }
    */
  }
});
//вращение как сделать? нужно подумать или движение по окружности.
rollButton.addEventListener("click", function () {
  for (let i = 0; i < balls.length; i += 1) {
    if (i % 2 === 0 && balls[i].velY > 0) {
      balls[i].velY += 0.5;
    } else if (i % 2 !== 0 && balls[i].velY < 0) balls[i].velY -= 0.5;
  }
});

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}
let EvilCircle = Object.create(Shape);

EvilCircle.color = "white";
EvilCircle.size = 10;
