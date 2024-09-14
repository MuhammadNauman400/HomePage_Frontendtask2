import React from 'react';
import FormField from './FormField';

const FormSection = ({ title }) => (
  <div className="flex flex-col px-12 py-6 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
    <div className="flex gap-2 items-center self-start">
      <div className={`flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 ${title === 'Pick - Up' ? 'bg-blue-600' : 'bg-blue-400'} bg-opacity-30 rounded-[70px]`}>
        <div className={`flex self-stretch my-auto w-2 h-2 ${title === 'Pick - Up' ? 'bg-blue-600 fill-blue-600' : 'bg-blue-400 fill-blue-400'} rounded-full min-h-[8px]`} />
      </div>
      <h3 className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900 w-[68px]">
        {title}
      </h3>
    </div>
    <div className="flex flex-wrap gap-6 items-start mt-4">
      <FormField label="Locations" placeholder="Select your city" />
      <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
      <FormField label="Date" placeholder="Select your date" />
      <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" />
      <FormField label="Time" placeholder="Select your time" />
    </div>
  </div>
);

export default FormSection;