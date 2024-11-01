import React, { FC } from "react";

interface SelectInputProps{
    label: string;
    list: string[];
    labelClassName?: string;
    required?: boolean;
    error:any;
    placeholder: string;
  
}

const SelectInput:FC<SelectInputProps> = ({label, list, labelClassName, required, error, placeholder}) => {
  return (
    <div className="mt-3">
      {label && (
        <label
          className={["inter pl-[1px] fs-500 text-[#343333] dark:text-white", labelClassName] }
        >
          {label}
          {required && <span className="text-red-600 fw-600 pl-1">*</span>}
        </label>
      )}
      <div className="flex items-center bg-[#E9EBFB]  mt-2 rounded-[6px]">
        <select className="text-black bg-transparent lg:p-3 rounded-[4px] placeholder:text-[13px] placeholder:text-[#999797] flex-1 outline-none ">
          <option value="" className="text-black bg-transparent lg:p-3 rounded-[4px] text-[13px] placeholder:text-[#999797]">{placeholder}</option>
          {
            list?.map((item) => <option>{item}</option> )
          }
        </select>
      </div>
      <>
        {error && (
          <span className="fs-500 fw-500 text-red-300">{error.toString()}</span>
        )}
      </>
    </div>
  );
};

export default SelectInput;
