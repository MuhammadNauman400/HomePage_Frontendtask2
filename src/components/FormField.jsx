import React from 'react';

const FormField = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label htmlFor={`${label.toLowerCase()}-input`} className="text-base font-bold tracking-tight text-gray-900">
      {label}
    </label>
    <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
      <input
        id={`${label.toLowerCase()}-input`}
        type="text"
        placeholder={placeholder}
        className="self-stretch my-auto w-[104px] bg-transparent border-none outline-none"
        aria-label={placeholder}
      />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a45b41e737baf7b0c28a7ff5eabd5a0a62109d3f879c5aa62a2bc5c5b81a70?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
    </div>
  </div>
);

export default FormField;