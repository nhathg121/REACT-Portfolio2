import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <div className="textContainer">
                    <h2> NHAT NGUYEN</h2>
                    <h1>Web Developer and UI Design </h1>
                    <div className="button">
                        <button type="button">See the latest work</button>
                        <button type="button">Contact me</button>
                    </div>
                    <img src="/scroll.png" alt="" />
                </div>
            </div>
            <div className="imageContainer">
                <img src="./hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero