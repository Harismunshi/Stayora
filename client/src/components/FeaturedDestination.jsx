import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import {useNavigate} from 'react-router-dom'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 2,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const FeaturedDestination = () => {
  const sectionRef = useRef();
const isInView = useInView(sectionRef, { once: true });
const titleRef = useRef();
const isTitleInView = useInView(titleRef, { once: false, margin: "-20% 0px" });


    const navigate = useNavigate();
  return (
    <div ref={sectionRef} className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
   <motion.div
  ref={titleRef}
  initial="hidden"
  animate={isTitleInView ? "visible" : "hidden"}
  variants={textVariant}
  className="text-center"
>
  <Title
    title="Featured Destination"
    subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
  />
</motion.div>


      {/* <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      /> */}
      
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={()=>{navigate('/rooms');scrollTo(0,0)}}
      className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
        View All Destination
      </button>
    </div>
  );
};

export default FeaturedDestination;
