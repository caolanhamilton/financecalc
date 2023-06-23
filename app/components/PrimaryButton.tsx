import React from "react";

type Props = { text: string };

export default function PrimaryButton({ text }: Props) {
  return (
    <button
      type="submit"
      className="font-extrabold bg-green-600 w-72 h-12 rounded-md uppercase text-white"
    >
      Apply now
    </button>
  );
}
