import React from "react";

type Props = {
  text: string;
};

export default function ErrorBox({ text }: Props) {
  return (
    <div className="border-2 rounded-md border-red-500 bg-red-100 text-red-500 p-2 w-auto md:w-64">
      {text}
    </div>
  );
}
