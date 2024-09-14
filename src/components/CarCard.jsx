import React from 'react';

const CarCard = ({ name, type, image, fuel, transmission, capacity, price, oldPrice }) => (
  <article className="flex overflow-hidden flex-col p-6 bg-white rounded-xl min-w-[240px] w-[304px] max-md:px-5">
    <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
      <div className="flex flex-col">
        <h3 className="text-xl tracking-tight text-gray-900">{name}</h3>
        <p className="mt-1 text-sm tracking-tight text-slate-400">{type}</p>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04576aef7c25b23f193926ccfab57e8ebf3aaf65dc2244a104c29056e7b56017?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
    </div>
    <img loading="lazy" src={image} alt={`${name} ${type}`} className="object-contain mx-3 mt-16 aspect-[3.23] w-[232px] max-md:mx-2.5 max-md:mt-10" />
    <div className="flex gap-4 items-start mt-16 text-sm font-medium text-slate-400 max-md:mt-10">
      <div className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb9f5fa088a33a8329469c11ed8f42f7df3e0fd11b9aa0921af94d8d3307f051?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="w-7">{fuel}</span>
      </div>
      <div className="flex gap-1 items-start whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/563fd9367e8be9e271233fa362e88c8b2205c920475aad51a787f2599d87477e?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="w-12">{transmission}</span>
      </div>
      <div className="flex gap-1.5 items-start">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e8de7593e9612213cc6d6563165a34283d07caa39443d7d00ed1a6650b3b925?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="w-[60px]">{capacity}</span>
      </div>
    </div>
    <div className="flex gap-5 justify-between mt-6 w-full">
      <div className="text-xl font-bold min-h-[44px] text-slate-400">
        {price}/ <span className="text-sm text-slate-400">day</span>
        {oldPrice && <div className="mt-1 text-sm">{oldPrice}</div>}
      </div>
      <button className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] w-[76px]">
        Rent Now
      </button>
    </div>
  </article>
);

export default CarCard;