import React from 'react';
import FormSection from './FormSection';

const RentalForm = () => (
  <section className="flex flex-wrap gap-5 justify-between mt-8 w-full max-w-[1312px] max-md:max-w-full">
    <FormSection title="Pick - Up" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddd4fa3e821a17ca46b096795cf249488652cfd7e0eb4ffc74f941674f0f222e?placeholderIfAbsent=true&apiKey=59495cd694d841eaab91f2ad631464d1" alt="" className="object-contain shrink-0 my-auto rounded-none aspect-square w-[60px]" />
    <FormSection title="Drop - Off" />
  </section>
);

export default RentalForm;