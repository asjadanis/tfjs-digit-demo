import React, { useRef, useState, useEffect } from "react";
import "./canvas.css";

const DigitCanvas = (props) => {
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState(null);
  const [isMouseDown, setMouseDown] = useState(false);
  const [lastPos, setLastPos] = useState({ x: null, y: null });

  const onMouseDown = (e) => {
    const { mouseX, mouseY } = getMousePosition(e);
    draw(mouseX, mouseY);
    setMouseDown(true);
  };

  const onMouseMove = (e) => {
    const { mouseX, mouseY } = getMousePosition(e);
    draw(mouseX, mouseY);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
  };

  const getMousePosition = (e) => {
    let mouseX = null;
    let mouseY = null;
    if (canvasRef.current) {
      const boundingRect = canvasRef.current.getBoundingClientRect();
      mouseX = e.clientX - boundingRect.left;
      mouseY = e.clientY - boundingRect.top;
      if (e.touches) {
        mouseX = e.touches[0].clientX - boundingRect.left;
        mouseY = e.touches[0].clientY - boundingRect.top;
      }
    }
    return {
      mouseX: mouseX,
      mouseY: mouseY
    };
  };

  const draw = (x, y) => {
    if (canvasContext && isMouseDown) {
      canvasContext.strokeStyle = "black";
      canvasContext.lineWidth = 10;
      canvasContext.lineJoin = "round";
      canvasContext.moveTo(lastPos.x, lastPos.y);
      canvasContext.lineTo(x, y);
      canvasContext.closePath();
      canvasContext.stroke();
    }
    setLastPos({ x, y });
  };

  useEffect(() => {
    if (canvasRef) {
      setCanvasContext(canvasRef.current.getContext("2d"));
    }
  }, []);

  return (
    <div>
      <canvas
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onTouchMove={onMouseMove}
        ref={canvasRef}
        width={"250px"}
        height={"250px"}
        className="canvas-styles"
      ></canvas>
    </div>
  );
};

export default DigitCanvas;
