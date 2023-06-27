"use client";
import React from "react";
import BrandingSection from "./BrandingSection";
import CostCalcForm from "./CostCalcForm";

export default function Calculator() {
  return (
    <>
      <div className="flex flex-col mx-20 mt-10 bg-white border border-gray-300 md:flex-row">
        <BrandingSection />
        <CostCalcForm />
      </div>
    </>
  );
}
