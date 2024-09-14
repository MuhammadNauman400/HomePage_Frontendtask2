import React from 'react';

const BannerCard = ({ title, description, buttonText, buttonColor, backgroundColor, imageSrc }) => (
  <div className={`flex overflow-hidden flex-col grow w-full ${backgroundColor} rounded-xl max-md:mt-8 max-md:max-w-full`}>
    <div className="flex flex-col items-start rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-col items-start pt-8 rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col items-start px-5 pt-16 rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:max-w-full">
          <div className="flex flex-col pr-16 pl-1 rounded-full border-solid border-[20px] border-white border-opacity-10 max-md:pr-5">
            <div className="flex z-10 flex-col mt-0 max-w-full text-white w-[284px]">
              <div className="flex flex-col w-full">
                <h2 className="text-3xl font-semibold tracking-tighter leading-10">{title}</h2>
                <p className="mt-4 text-base font-medium tracking-tight leading-6">{description}</p>
              </div>
              <button className={`gap-2 self-stretch px-5 mt-5 max-w-full text-base font-semibold tracking-tight text-center ${buttonColor} rounded min-h-[44px] w-[120px]`}>
                {buttonText}
              </button>
            </div>
            <div className="flex flex-col self-end pt-16 pb-2.5 pl-14 max-w-full rounded-full border-solid border-[20px] border-white border-opacity-10 w-[295px] max-md:pl-5">
              <div className="flex shrink-0 self-center rounded-full border-solid border-[20px] border-white border-opacity-10 h-[140px] w-[170px]" />
              <img loading="lazy" src={imageSrc} alt="" className=" object-contain self-start mr-0 w-full aspect-[3.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BannerCard;