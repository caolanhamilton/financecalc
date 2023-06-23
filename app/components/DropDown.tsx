import React from "react";
import getInterestFromString from "../utils/getInterestFromString";

type Props = {
  options: string[];
  setPaymentLength: React.Dispatch<React.SetStateAction<number>>;
};

export default function DropDown({ options, setPaymentLength }: Props) {
  return (
    <div className="mt-10 relative border border-green-600 rounded-md p-2 w-96 h-14 flex flex-row items-center">
      <label className="absolute bg-white px-2 -top-3 left-3 text-sm text-green-600">
        Select alternative APR
      </label>
      <div className="flex flex-row w-full">
        <select
          className="w-full form-select appearance-none pr-8 pl-2 bg-no-repeat bg-transparent"
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
