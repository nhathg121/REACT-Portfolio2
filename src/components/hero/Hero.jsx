import React from 'react'
import "./hero.sass"
import { motion } from "framer-motion"
const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0

        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 1
            }

        }, scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }

    }
    const slideVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-320%",
            opacity: 1,
            transition: {
                repeat: Infinity,
                duration: 20,
                repeatType: "mirror"
            }

        }

    }
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial={"initial"} animate="animate">
                    <motion.h2 variants={textVariants} > NHAT NGUYEN</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and UI Design </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} type="button">See the latest work</motion.button>
                        <motion.button variants={textVariants} type="button">Contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
                White Content Creator Influencer
            </motion.div>

            <div className="imageContainer">
                <img src="./hero.png" alt="" />
            </div>
        </div >
    )
}

export default Hero