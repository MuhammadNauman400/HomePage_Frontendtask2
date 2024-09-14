import React from 'react';
import BannerCard from './BannerCard';

const HeroBanner = () => (
  <section className="flex overflow-hidden flex-col items-center pt-8 pr-4 pb-16 ml-4 bg-neutral-100 mt-10 max-md:mt-10 max-md:max-w-full">
    <div className="w-full max-w-[1312px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <BannerCard 
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          buttonText="Rental Car"
          buttonColor="bg-blue-600"
          backgroundColor="bg-blue-400"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/542c4436c0aaff860a04dcf4d8af2083396e701baac2a84cc2a148889f66e98b?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1"
        />
        <BannerCard
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          buttonText="Rental Car"
          buttonColor="bg-blue-400"
          backgroundColor="bg-blue-600"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/67b0364fd9e9b2a039e1352b7e170feb702b444c51550547b4499099befd72f2?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1"
        />
      </div>
    </div>
  </section>
);

export default HeroBanner;
