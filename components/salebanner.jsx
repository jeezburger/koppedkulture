import React from 'react';
import { motion } from 'framer-motion';

const SaleBanner = () => {
    return (
        <div className="sale-banner">
            <motion.div
                className="sale-banner-text"
                animate={{ x: ['0%', '-100%'] }} // Adjust -100% based on the width of the text and banner
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "linear"
                }}
            >
                <span>
                    SALE! UP TO 50% OFF ON SELECTED ITEMS! &nbsp;  |  &nbsp; SHOP NOW AND SAVE BIG! &nbsp; | &nbsp; LIMITED TIME OFFER!
                </span>
            </motion.div>
        </div>
    );
};

export default SaleBanner;
