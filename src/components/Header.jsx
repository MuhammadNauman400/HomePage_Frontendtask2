import React from 'react';
import SearchBar from './SearchBar';

const Header = () => (
  <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-12 py-10 max-w-full bg-white border border-solid border-slate-300 border-opacity-40 w-full max-md:px-5">
    <div className="flex flex-wrap gap-10 max-md:max-w-full">
      <h1 className="my-auto text-3xl font-bold tracking-tighter text-blue-600 basis-auto">
        MORENT
      </h1>
      <SearchBar />
    </div>
    <nav className="flex gap-5 items-start">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cea4b83e24bbf7f13852ef7be95b69b9dc48ed633bdbdc4af58e28c403e1424?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-11 rounded-none aspect-square" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac347ebdb3cc99208384e0ddee249dd7edb22d276f4f8eb0e21bef5cd4f5903?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-11 rounded-none aspect-square" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/099d60d7b50c41de98189731c749fc56bfca09dd76c5c7e39aecdcfc079b470e?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 w-11 rounded-none aspect-square" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f63d227b2857639318c2a0f204ba861799bafb075fac4a248fd374ff844cbeb9?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="User profile" className="object-contain shrink-0 w-11 aspect-square rounded-[90px]" />
    </nav>
  </header>
);

export default Header;