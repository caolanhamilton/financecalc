import React from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

export default function PopUpOptions() {
  return (
    <>
      <div className="bg-white h-96 w-full border flex flex-col justify-center space-y-8 items-center">
        <p className="text-2xl text-green-800 uppercase">
          Application received
        </p>
        <div className="flex row justify-center items-center space-x-4">
          <Link href={"/applications"}>
            <PrimaryButton type="button" text="View applications" />
          </Link>
          <a href={"/"}>
            <PrimaryButton type="button" text="Start new application" />
          </a>
        </div>
      </div>
    </>
  );
}
