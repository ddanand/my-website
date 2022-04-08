class Ball {
  canvas = null;
  ctx = null;
  ballState = null;

  constructor(
    canvas,
    ballRadius = 20,
    color = "#222",
    x = 50,
    y = 50,
    dx = 10,
    dy = 10
  ) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ballState = {
      x,
      y,
      dx,
      dy,
      ballRadius,
      color
    };
  }

  draw = () => {
    const { x, y, dx, dy } = this.ballState;

    this.drawBall();
    this.detectCollision();

    this.ballState.x = x + dx;
    this.ballState.y = y + dy;
  };

  drawBall = () => {
    const { x, y, ballRadius, color } = this.ballState;

    this.ctx.beginPath();
    this.ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();
  };

  detectCollision = () => {
    const { x, y, dx, dy, ballRadius } = this.ballState;
    if (x + dx > this.canvas.width - ballRadius || x + dx < ballRadius) {
      this.ballState.dx = -dx;
    }

    if (y + dy < ballRadius || y + dy + ballRadius > this.canvas.height) {
      this.ballState.dy = -dy;
    }
  };
}

export default Ball;
