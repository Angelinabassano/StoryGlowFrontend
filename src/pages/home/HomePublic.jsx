import Carousel from '@/components/carousel/Carousel';
import React from 'react';
import Mockups from '@/assets/home/Mockups.png'; 

const HomePublic = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center mb-12">
        
        <div className="md:w-1/2 flex justify-center items-center text-center mt-12">
          <div>
            <h1 className="text-primary text-4xl font-bold mb-4">
              Welcome to Story Glow
            </h1>
            <p className="text-primary text-sm md:text-base">
            Discover a world of captivating stories and share your own creations. Connect with a vibrant community of readers and writers. Start your literary journey today with Story Glow!
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-12">
          <img
            src={Mockups}
            alt="Mockups"
            className="w-full h-auto md:w-3/4 md:h-auto object-cover"
          />
        </div>
      </div>

      <div className="w-full mt-12">
        <Carousel />
      </div>
    </div>
  );
};

export default HomePublic;
