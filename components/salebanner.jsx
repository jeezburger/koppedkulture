import React from 'react';
import { motion } from 'framer-motion';

const SaleBanner = () => {
    return (
        <div className="sale-banner">
            <motion.div
                className="sale-banner-text"
                animate={{ x: ['100%', '-100%'] }} // Moves the text fully off the screen to the left
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10, // Adjust the speed of the animation
                    ease: "linear"
                }}
            >
                <span>Sale! Up to 50% off on selected items</span>
            </motion.div>
        </div>
    );
};

export default SaleBanner;
