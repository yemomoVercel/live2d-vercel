import {useMemo,useRef,useEffect} from "react"
import * as PIXI from "pixi.js"
function App() {

  const containerRef = useRef<HTMLCanvasElement>(null)
  // useEffect(()=>{
  //     const app = new PIXI.Application({
  //       //元素
  //       view:containerRef.current!,
  //       width:window.innerWidth,
  //       height:window.innerHeight,
  //       backgroundColor:"lightblue",
  //       //防锯齿
  //       antialias:true
  //     })
  //     const rectangle = new PIXI.Graphics()
  //     rectangle.beginFill("white")
  //     rectangle.lineStyle(2,"black")
  //     rectangle.drawRect(0,0,128,64)
  //     rectangle.position.set(170,170)
  //     rectangle.endFill()

  //     //对rectangle进行一些设置
  //     //缩放
  //     rectangle.scale.set(2,2)
  //     //旋转
  //     rectangle.rotation = Math.PI/4
  //     //设置锚点,设置中点,锚点pivot
  //     rectangle.pivot.set(64,32)
  //     app.stage.addChild(rectangle)

  //     //绘制矩形
  //     const circle = new PIXI.Graphics()
  //     circle.beginFill("red")
  //     circle.lineStyle(2,"white")
  //     circle.drawCircle(0,0,32)
  //     circle.endFill()
  //     circle.position.set(320,320)
  //     app.stage.addChild(circle)
  // },[containerRef])
  return (
    //舞台
    <div>
      <canvas ref={containerRef}> </canvas>
    </div>
  )
}

export default App
