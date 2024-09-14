import React from 'react';
import CarCard from './CarCard';

const popularCars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c3b6c59318191c4d16fdbba0cf0566c8b74e804539a66f63156a99c6d841ada?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1",
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00"
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a186543802b2c235fee13f923ce4a5062235eabdd9730cb0330f411578ec2e9?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00",
    oldPrice: "$100.00"
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d6c8235f983360a78f01a82bdb243d7247e379b5e56d575df348cdec80c125b?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1",
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00"
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a15cb233beb062bcabaccbd735aff407aea6e59abe3db04b32bf026b1b1c336?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00",
    oldPrice: "$100.00"
  }
];

const recommendedCars = [
  // Your recommendedCars array here
];

const CarList = () => (
  <section className="flex flex-col mt-9 max-md:max-w-full">
    <div className="flex flex-col max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start text-base font-semibold text-center max-md:max-w-full">
        <h2 className="gap-2 self-stretch px-5 rounded min-h-[44px] text-slate-400 w-[132px]">Popular Car</h2>
        <button className="gap-2 self-stretch px-5 text-blue-600 rounded min-h-[44px] w-[104px]">View All</button>
      </div>
      <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
        {popularCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
    <div className="flex flex-col mt-8 max-md:max-w-full">
      <h2 className="gap-2 self-stretch px-5 max-w-full text-base font-semibold text-center rounded min-h-[44px] text-slate-400 w-[196px]">
        Recommendation Car
      </h2>
      <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
        {recommendedCars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-10 items-center self-end mt-52 mr-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <button className="gap-2 self-stretch px-5 my-auto text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[156px]">
        Show more car
      </button>
      <div className="self-stretch my-auto text-sm font-medium tracking-tight leading-5 text-right text-slate-400 w-[140px]">
        120 Car
      </div>
    </div>
  </section>
);

export default CarList;
