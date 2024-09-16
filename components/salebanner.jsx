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
                    <strong>Sale is Live Now | First 1000 customers get ₹500 off | Shop now! Hurry Up!</strong>
                </span>
            </motion.div>
        </div>
    );
};

export default SaleBanner;
