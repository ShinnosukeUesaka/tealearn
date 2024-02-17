'use client';
// import React, { use, useEffect, useRef, useState} from 'react';
// import * as fabric from 'fabric'; // v6

// export default function Classroom () {
//   const canvasEl = useRef<HTMLCanvasElement>(null);
//   const fabricWrapper = useRef<HTMLDivElement>(null);
//   const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  
  
//   function resizeCanvas() {
//     if (!canvas) return;
//     const ratio = canvas.getWidth() / canvas.getHeight();
//     const containerWidth   = fabricWrapper.current.clientWidth;
//     const containerHeight  = fabricWrapper.current.clientHeight;

//     const scale = containerWidth / canvas.getWidth();
//     const zoom  = canvas.getZoom() * scale;
//     canvas.setDimensions({width: containerWidth, height: containerWidth / ratio});
//     canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
//     }
 
//   useEffect(() => {
//     const canvasContext = new fabric.Canvas(canvasEl.current);
//     window.addEventListener('resize', resizeCanvas);
//     const updateCanvasContext = (canvas: fabric.Canvas | null) => {
//       if (canvas) {
//         // wet the canvas to the container size 
//         canvas.setDimensions({ width: 600, height: canvasEl.current!.clientHeight })
//         const rect = new fabric.Rect({
//           left: 100,
//           top: 100,
//           fill: 'red',
//           width: 20,
//           height: 20
//         });
//         canvas.add(rect);
//       }
//     };

    
    
//     setCanvas(canvasContext);
//     return () => {
//         setCanvas(null);
//         window.removeEventListener('resize', resizeCanvas);
//     }
//   }, []);

//   // canvas with maximum width and height
//     return(<div ref={fabricWrapper} className="fabric-canvas-wrapper w-[500px]">
//     <canvas ref={canvasEl} className="w-full h-full" />;
//     </div>)
// };
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6

export default function Classroom  (){
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvasContext = useRef<fabric.Canvas | null>(null);
  const fabricWrapper = useRef<HTMLDivElement>(null);
  
    const updateCanvasContext = (canvas: fabric.Canvas | null) => {
        canvasContext.current = canvas;
    };
    
  useEffect(() => {
    if (!canvasEl.current) return;
    const canvas = new fabric.Canvas(canvasEl.current);
    // make the fabric.Canvas instance available to your app
    updateCanvasContext(canvas);
    resizeCanvas(canvas)
    addEventListener('resize', () => resizeCanvas(canvas));
    return () => {
      updateCanvasContext(null);
      canvas.dispose();
    }
  }, []);
  
  function addRectangle() {
    if (!canvasContext.current) return;
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    canvasContext.current.add(rect);
  }
  
  function resizeCanvas(canvas: fabric.Canvas | null) {
    if (!canvasContext.current) return;
    if (!fabricWrapper.current) return;``
    const ratio = canvasContext.current.getWidth() / canvasContext.current.getHeight();
    const containerWidth   = fabricWrapper.current.clientWidth;
    console.log('containerWidth', containerWidth);
    const containerHeight  = fabricWrapper.current.clientHeight;

    const scale = containerWidth / canvasContext.current.getWidth();
    const zoom  = canvasContext.current.getZoom() * scale;
    console.log('zoom', zoom);
    canvasContext.current.setDimensions({width: containerWidth, height: containerHeight});
    //canvasContext.current.setDimensions({width: containerWidth, height: containerWidth / ratio});
    //canvasContext.current.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    }

  return<><div ref={fabricWrapper} className="fabric-canvas-wrapper aspect-[16/9] h-1/2 flex-1  outline"> <canvas ref={canvasEl} className="w-full h-full" /></div><button onClick={addRectangle}>Add Rectangle</button></>;
};
