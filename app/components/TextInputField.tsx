import React from "react";

type Props = {
  labelText: string;
  setState: React.Dispatch<React.SetStateAction<number | undefined>>;
  state: number | undefined;
};

export default function TextInputField({ labelText, setState, state }: Props) {
  return (
    <label>
      <p className="mb-6 text-xl text-green-600">{labelText}</p>
      <div className="flex flex-row w-64 h-12 border border-green-600 rounded-md">
        <div className="flex flex-row items-center justify-center w-1/6 h-full bg-green-600 border-r">
          <p className="text-lg font-bold text-white">£</p>
        </div>
        <input
          className="w-full rounded-md"
          type="text"
          onChange={(e) => setState(Number(e.target.value))}
          value={state}
        ></input>
      </div>
    </label>
  );
}
