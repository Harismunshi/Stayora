import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat z-0"></div>

  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Content */}
  <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32 text-white">
    <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
      The Ultimate Stay with StayOra
    </p>
    <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
      Find Your Ideal Stay, Anywhere in the World
    </h1>
    <p className="max-w-130 mt-2 text-sm md:text-base">
      Unmatched comfort and global convenience come together at StayOra. From
      budget escapes to luxury retreats, your perfect stay is just a click
      away. Book with confidence. Travel with ease.
    </p>
    <form className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

            <div>
                <div className='flex items-center gap-2'>
                  <img src={assets.calenderIcon} alt="" className="h-4" />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id="destinations">
                    {cities.map((city,idx)=>(
                        <option value={city} key={idx} />
                    ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className="h-4" />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className="h-4" />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
               <img src={assets.searchIcon} alt="" className="h-7" />
                <span>Search</span>
            </button>
        </form>
  </div>
  
</div>

  );
};

export default Hero;
