import React from 'react';

const Footer = () => (
  <footer className="flex overflow-hidden z-10 flex-col self-start px-16 py-16 mt-0 w-full bg-white max-md:px-5 max-md:mt-0 max-md:max-w-full">
    <div className="flex flex-wrap gap-10 items-start w-full max-w-[1244px] max-md:max-w-full">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter text-blue-600">MORENT</h2>
        <p className="mt-4 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>
      <nav className="flex-auto mt-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <h3 className="self-start text-xl font-semibold tracking-tight text-gray-900">About</h3>
              <ul className="mt-12 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60 max-md:mt-10">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">Community</h3>
              <ul className="self-start mt-11 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60 max-md:mt-10">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
              <h3 className="self-start text-xl font-semibold tracking-tight text-gray-900">Socials</h3>
              <ul className="mt-12 text-base font-medium tracking-tight leading-6 text-neutral-900 text-opacity-60 max-md:mt-10">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <hr className="shrink-0 mt-12 h-px border border-solid border-neutral-900 border-opacity-20 max-md:mt-10 max-md:max-w-full" />
    <div className="flex flex-wrap gap-5 justify-between mt-9 w-full text-base font-semibold tracking-tight text-gray-900 max-md:max-w-full">
      <p>©2022 MORENT. All rights reserved</p>
      <div className="flex gap-10 text-right">
        <a href="#" className="basis-auto">Privacy & Policy</a>
        <a href="#" className="basis-auto">Terms & Condition</a>
      </div>
    </div>
  </footer>
);

export default Footer;