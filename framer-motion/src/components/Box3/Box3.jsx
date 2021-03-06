import React from "react";
import { motion } from "framer-motion"

export default function Box3(){



    return(
        <div className="box-container">
            <motion.div className="box"
        
        animate={{
            scale:[1, 0.5, 0.5, 1, 1],
            borderRadius: ["20%", "20%", "50%","50%", "20%"],
            rotate: [0,0, 270, 270,0]
        }}
        transition={{
            duration:1
        }}
        > 
 

            </motion.div>

        </div>
    )
}