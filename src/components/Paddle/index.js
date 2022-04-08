class Paddle {
  state = {
    paddleX: 0,
    rightPressed: false,
    leftPressed: false,
    paddleHeight: 0,
    paddleWidth: 0,
  };

  constructor(canvas, paddleX, paddleHeight = 20, paddleWidth = 150) {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);

    this.canvas = canvas;
    this.state = {
      paddleX: paddleX,
      rightPressed: false,
      leftPressed: false,
      paddleHeight: paddleHeight,
      paddleWidth: paddleWidth
    };
  }

  keyDownHandler = event => {
    if (event.keyCode === 39) {
      this.state.rightPressed = true;
    } else if (event.keyCode === 37) {
      this.state.leftPressed = true;
    }
  };

  keyUpHandler = event => {
    if (event.keyCode === 39) {
      this.state.rightPressed = false;
    } else if (event.keyCode === 37) {
      this.state.leftPressed = false;
    }
  };

  draw = () => {
    const { leftPressed, rightPressed, paddleX, paddleWidth } = this.state;

    this.drawPaddle();

    if (rightPressed && paddleX + paddleWidth < this.canvas.width) {
      this.state.paddleX = this.state.paddleX + 10;
    }

    if (leftPressed && paddleX > 0) {
      this.state.paddleX = this.state.paddleX - 10;
    }
  };

  drawPaddle = () => {
    const ctx = this.canvas.getContext("2d");
    const { paddleX, paddleHeight, paddleWidth } = this.state;

    ctx.beginPath();
    ctx.rect(
      paddleX,
      this.canvas.height - paddleHeight,
      paddleWidth,
      paddleHeight
    );

    ctx.fillStyle = "#222";
    ctx.fill();
    ctx.closePath();
  };
}

export default Paddle;
