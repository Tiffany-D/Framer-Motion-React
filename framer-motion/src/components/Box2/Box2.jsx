import React from "react";
import { motion } from "framer-motion"

export default function Box2(){



    return(
        <div className="box-container">
            <motion.div className="box"
            whileHover={{
                scale:2.5
            }}

            whileTap={{
                scale:0.5
            }}
            >
 

            </motion.div>

        </div>
    )
}