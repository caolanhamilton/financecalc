import React from "react";
import getInterestFromString from "../utils/getInterestFromString";

type Props = {
  options: string[];
  setPaymentLength: React.Dispatch<React.SetStateAction<number>>;
};

export default function DropDown({ options, setPaymentLength }: Props) {
  return (
    <div className="relative flex flex-row items-center p-2 mt-10 border border-green-600 rounded-md w-96 h-14">
      <label className="absolute px-2 text-sm font-bold text-green-600 bg-white -top-3 left-3 font-">
        Select alternative APR
      </label>
      <div className="flex flex-row w-full">
        <select
          className="w-full pl-2 pr-8 bg-transparent bg-no-repeat appearance-none form-select"
          onChange={(e) => {
            setPaymentLength(Number(e.target.value));
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={getInterestFromString(option)}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
