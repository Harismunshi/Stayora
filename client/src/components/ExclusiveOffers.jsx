import React, { useRef } from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import { motion, useInView } from 'framer-motion';

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ExclusiveOffers = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariant}
        className="flex flex-col md:flex-row items-center justify-between w-full gap-6"
      >
        <Title
          align="left"
          title="Exclusive Stayora Offers"
          subTitle="Unlock unbeatable prices, curated stay bundles, and limited-time perks for every kind of traveler — from solo explorers to luxury seekers."
        />
        <button className="group flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 transition">
          View All Offers
          <img
            src={assets.arrowIcon}
            className="group-hover:translate-x-1 transition-transform"
            alt="Arrow Icon"
          />
        </button>
      </motion.div>
    </div>
  );
};

export default ExclusiveOffers;
