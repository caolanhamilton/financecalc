"use client";
import React, { useContext } from "react";

type Props = { text: string };
import { UserContext } from "../page"; 
export default function PrimaryButton({ text }: Props) {
  let { userAuthDetails } = useContext(UserContext);
  console.log(userAuthDetails);
  return (
    <button
      type="submit"
      className="h-12 font-extrabold text-white uppercase bg-green-600 rounded-md w-72"
    >
      Apply now
    </button>
  );
}
