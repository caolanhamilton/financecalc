import React from "react";
import Image from "next/image";

export default function BrandingSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white bg-green-600 md:w-1/4 p-4">
      <Image
        className="h-auto w-42"
        src="/nuffield-health-logo.svg"
        height={375}
        width={194}
        alt="company logo"
        priority
      />
      <p>Working with Chrysalis Finance</p>
    </div>
  );
}
