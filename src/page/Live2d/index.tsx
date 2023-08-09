import React, { useEffect,useRef} from 'react'
import {Live2DModel} from "pixi-live2d-display"
import * as PIXI from "pixi.js"

export default function index() {
    const containerRef = useRef(null)
    useEffect(()=>{
        async function live2dModule(){
            //将module转换为路径
            const moduleLive2d:any = await Live2DModel.from("/model/Miss Bai.model3.json")
            const app = new PIXI.Application({
                view:containerRef.current!,
                autoStart:true,
                resizeTo:window
            })
            app.stage.addChild(moduleLive2d)
            moduleLive2d.x = 100;
            moduleLive2d.scale.set(0.2);
            moduleLive2d.on('hit', (hitAreas:any) => {
                if (hitAreas.includes('dress')) {
                    moduleLive2d.motion('weapon');
                }
            })
        }
        live2dModule()
    },[containerRef])  
    
  return (
    <div>
        <canvas ref={containerRef}></canvas>
    </div>
  )
}
