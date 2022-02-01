import React from "react"
import { motion, useAnimation } from "framer-motion"

export default function Box4(){

    const controls = useAnimation()

    return(
        <div className="box-container">
            <button onClick={() => {
                controls.start({
                    x: 800,
                    transition: {duration: 3}
                })
            }}>Move Rigth</button>
            <button onClick={() => {
                controls.start({
                    x: -500,
                    transition:{duration:3}
                })
            }}>Move Left</button>

            <button onClick={()=>{
                controls.start({
                    y:300,
                    transition:{duration:2}
                })
            }}>Go down</button>
            <motion.div 
            className="box"
            animate={controls}>
                
            </motion.div>

        </div>
    )
}
