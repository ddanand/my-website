import React, {useRef, useEffect} from 'react';
import Ball from '../Ball';
import classes from "./styles.module.css";
import Paddle from '../Paddle';

const Game = () => {
    const canvasRef = useRef();
    const requestIdRef = useRef(null);
    let ball;
    let paddle;

    useEffect(() => {
        const myCanvas = canvasRef.current;

        myCanvas.width = window.innerWidth - 200 ;
        myCanvas.height = window.innerHeight - 200;

        ball = new Ball(myCanvas, 20, "yellow", 100, 100);
        paddle = new Paddle(myCanvas, myCanvas.width/2);

        requestIdRef.current = requestAnimationFrame(draw);

        return () => {
          cancelAnimationFrame(requestIdRef.current);
        }
    }, [])

    /* the function that does the actual drawing on the canvas */
    const draw = () => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ball.draw();
        paddle.draw();
    
        // const { x, dx, y, dy } = ball.ballState;
        // const { paddleX } = paddle.state;
    
        // if (x + dx > paddleX && x + dx < paddleX + paddleWidth &&
        //       y + dy > canvasRef.current.height - paddleHeight - ballRadius) {
        //   console.log('ll')
        // }
    
        requestIdRef.current = requestAnimationFrame(draw);
    };  

    return (
        <div className={classes.container}>
            <canvas className={classes.myCanvas} ref={canvasRef}>
                You're browser does not support HTML5 Canvas.
            </canvas>
        </div>
    )
}

export default Game;