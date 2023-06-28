import React from "react";

type Props = {
  options: {
    [key: string]: { apr: number; length: number };
  };
  setPaymentLength: React.Dispatch<React.SetStateAction<number>>;
  setApr: React.Dispatch<React.SetStateAction<number>>;
};


export default function DropDown({ options, setPaymentLength, setApr }: Props) {
  return (
    <div className="relative flex flex-row items-center p-2 mt-10 border border-green-600 rounded-md w-full h-14">
      <label className="absolute px-2 text-sm font-bold text-green-600 bg-white -top-3 left-3 font-">
        Select alternative APR
      </label>
      <div className="flex flex-row w-full">
        <select
          className="w-full pl-2 pr-8 bg-transparent bg-no-repeat appearance-none form-select text-sm lg:text-lg"
          onChange={(e) => {
            setPaymentLength(options[e.target.value].length);
            setApr(options[e.target.value].apr);
          }}
        >
          {Object.keys(options).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
