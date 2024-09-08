import React from 'react';
import buildingImage from '../assets/houses.png';
import aboutBobble from '../assets/aboutbobble.svg';

// About component displaying information and images in a responsive layout.
const About = () => {
  return (
    <div className="relative flex flex-col gap-6 mb-8 lg:flex-row lg:justify-center lg:gap-6 lg:pr-[50px] lg:pl-[151px] xl:pl-[248px] xl:pr-[147px]">
      {/* Decorative background image, positioned absolutely */}
      <img 
        className="absolute w-32 left-8 -top-4 -z-10 md:left-24 md:w-40 lg:w-44 lg:left-28 lg:-top-6 xl:w-60 xl:left-44 xl:-top-10"
        src={aboutBobble}
        alt=""
        aria-hidden="true"
      />
      {/* Main image of a modern residential building */}
      <div className="flex justify-center px-16 lg:w-[496px] lg:h-[372px]">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={buildingImage}
          alt="A modern residential building"
        />
      </div>
      {/* Text content and button */}
      <div className="px-14 lg:w-[597px] lg:h-[372px]">
        <h3 className="mb-2 text-2xl font-bold text-[#35BCE7] lg:text-[32px] xl:leading-[44px] lg:mb-6">
          We verbeteren onze woningen
        </h3>
        <p className="mb-4 lg:mb-3 xl:w-[480px] xl:mb-6">
          Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen...
        </p>
        <div className="h-10 lg:w-[131px]">
          <button className="w-full h-full text-white bg-gradient-to-r from-[#BFE27D] to-[#35BCE7] rounded-lg">
            Lees meer
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
