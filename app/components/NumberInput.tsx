import React from "react";

type Props = {
  labelText: string;
  setState: React.Dispatch<React.SetStateAction<string | undefined>>;
  state: string | undefined;
};

export default function NumberInput({ labelText, setState, state }: Props) {
  return (
    <label>
      <p className="mb-6 text-xl text-green-600">{labelText}</p>
      <div className="flex flex-row w-64 h-12 border border-green-600 rounded-md">
        <div className="flex flex-row items-center justify-center w-1/6 h-full bg-green-600 border-r">
          <p className="text-lg font-bold text-white">£</p>
        </div>
        <input
          className="w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          type="number"
          min={0}
          minLength={0}
          onChange={(e) => setState(e.target.value)}
          value={state}
          required
        ></input>
      </div>
    </label>
  );
}
