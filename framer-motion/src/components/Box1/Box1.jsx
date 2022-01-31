import React, { useState } from "react"
import { motion } from "framer-motion"

export default function Box1(){

const [animateBox, setAnimateBox]= useState(false);

    return(
        <div className="box-container">
            <motion.div 
            className="box"
            style={{opacity:0.2}}
            animate={{
                
                x: animateBox ? 800 : 0,
                
                // 800
                // "100rem"
                opacity: animateBox ? 1 : 0.5,
                // 1
                rotate:animateBox ? 360: 0
            }}

            initial={{
                opacity:0.5
            }}

            transition={{
                type: "spring",
                stiffness: 60,
                damping: 1
            }}
            onClick={()=> setAnimateBox(!animateBox)}
            >
                
            </motion.div>

        </div>
    )
}
