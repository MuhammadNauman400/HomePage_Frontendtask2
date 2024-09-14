import React from 'react';

const SearchBar = () => (
  <form className="flex flex-wrap flex-auto gap-10 px-5 py-2.5 text-sm font-medium stracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-md:max-w-full">
    <div className="flex gap-5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad36dc19108b859ff2af2aa13a36fd05b31822bfb3bd0cd138fbb8de95842b3?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <label htmlFor="search-input" className="sr-only">Search something here</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search something here"
        className="basis-auto bg-transparent border-none outline-none"
        aria-label="Search something here"
      />
    </div>
    <button type="submit" aria-label="Submit search">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83885f62305c1867957cdc81f3f4b767a0c01a4230a4fa298e916d7159190f3e?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-6 aspect-square" />
    </button>
  </form>
);

export default SearchBar;