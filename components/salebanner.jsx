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
                    <strong>Diwali Sale is Live Now | Time Limit Only. | Shop now! </strong>
                </span>
            </motion.div>
        </div>
    );
};

export default SaleBanner;
