var canvas = document.querySelector(".snakeCanvas");
canvas.width = 600;
canvas.height = 400;
var ctx = canvas.getContext("2d");
var doc;
var foodObj;
var snakeHead;
var snakeArray = [];
var needNewFoodAndSnake = false;
var currentDirection = 0;
var snakeXDirectionValue = 0;
var snakeYDirectionValue = 0;
var game;

function startGame() {
  resetCanvas();
  doc = document.addEventListener("keydown", direction);
  let snakeObj = new Snake(280, 180);
  snakeArray.push(snakeObj);
  snakeHead = snakeArray[0];
  snakeYDirectionValue = -20;
  foodObj = new Food();
  foodObj.newPos();
  foodObj.update();

  //console.log(snakeArray);
  game = setInterval(updateCanvas, 100);
}

function endGame() {
  resetCanvas();
}

function resetCanvas() {
  doc = 0;
  ctx.clearRect(0, 0, 600, 400);
  clearInterval(game);
  snakeArray = [];
  snakeXDirectionValue = 0;
  snakeYDirectionValue = 0;
}

class Snake {
  constructor(_xPos, _yPos) {
    this.width = 20;
    this.height = 20;
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.update = function(color) {
      ctx.fillStyle = color;
      ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    };
    this.newPos = function(xValue, yValue) {
      this.xPos += xValue;
      this.yPos += yValue;
    };
  }
}

class Food {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.xPos = 0;
    this.yPos = 0;
    this.update = function() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    };
    this.newPos = function() {
      this.xPos = Math.floor(Math.random() * 28) * 20;
      this.yPos = Math.floor(Math.random() * 19) * 20;
    };
  }
}

function updateCanvas() {
  if (needNewFoodAndSnake) {
    createNewFoodAndSnake();
  }
  moveSnake();
  foodObj.update();
  ValidateXandYPos();
}

function moveSnake() {
  let i;
  let prevXValue;
  let prevYValue;
  for (i = 0; i < snakeArray.length; i++) {
    let obj = snakeArray[i];
    let tmpXValue = obj.xPos;
    let tmpYValue = obj.yPos;
    ctx.clearRect(obj.xPos, obj.yPos, 20, 20);
    if (i == 0) {
      obj.newPos(snakeXDirectionValue, snakeYDirectionValue);
      obj.update("yellow");
    } else {
      obj.xPos = prevXValue;
      obj.yPos = prevYValue;
      obj.update("blue");
    }
    prevXValue = tmpXValue;
    prevYValue = tmpYValue;
  }
}

function createNewFoodAndSnake() {
  let newSnakeObj = new Snake(foodObj.xPos, foodObj.yPos);
  snakeArray.push(newSnakeObj);
  foodObj = new Food();
  foodObj.newPos();
  foodObj.update();
  console.log(foodObj);
  needNewFoodAndSnake = false;
}

function direction(event) {
  let key = event.keyCode;

  let dir = key - currentDirection;
  //console.log(dir);
  if (dir == 2 || dir == -2) {
    return;
  }
  currentDirection = key;
  switch (key) {
    case 37:
      snakeXDirectionValue = -20;
      snakeYDirectionValue = 0;
      break;
    case 38:
      snakeXDirectionValue = 0;
      snakeYDirectionValue = -20;
      break;
    case 39:
      snakeXDirectionValue = 20;
      snakeYDirectionValue = 0;
      break;
    case 40:
      snakeXDirectionValue = 0;
      snakeYDirectionValue = 20;
      break;
  }
}

function ValidateXandYPos() {
  //console.log(x);
  if (
    snakeHead.xPos > 580 ||
    snakeHead.xPos < 0 ||
    snakeHead.yPos > 380 ||
    snakeHead.yPos < 0
  ) {
    alert("Snake length: " + snakeArray.length);
    endGame();
  }

  if (snakeHead.xPos == foodObj.xPos && snakeHead.yPos == foodObj.yPos) {
    needNewFoodAndSnake = true;
  }

  for (let index = 0; index < snakeArray.length; index++) {
    if (index != 0) {
      let obj = snakeArray[index];
      if (snakeHead.xPos == obj.xPos && snakeHead.yPos == obj.yPos) {
        alert("Snake length: " + snakeArray.length);
        endGame();
      }
    }
  }
}

//startGame();
//call draw function every 100ms
//let game = setInterval(updateCanvas, 100);
