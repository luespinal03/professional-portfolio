import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div id='home' className='app__header app__flex'>
            <motion.div
                // animation comes from the left on the x axis. This is because of the -100. A negative number indicats it comes from the left and stops at 0 which means it stops right at the center, right in the middle. Opacity goes from 0 to 1 in 0.5 seconds as specified in the duration.
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__header-info'
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>Luis</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>Web Developer</p>
                        {/* commented out for now, feel free to add something in it in the future */}
                        {/* <p className='p-text'></p> */}
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                // delayChildren delays the children inside the div delayChildren was originally invoked
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__header-img'>

                <img src={images.profile} alt='profile_bg' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt='profile_circle'
                    className='overlay_circle'
                />
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.python, images.mernStack, images.solidityLogo,].map((circle, index) => (
                    <div className='cicle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='circle' />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Header