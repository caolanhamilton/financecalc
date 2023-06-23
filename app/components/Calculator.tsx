import React from "react";
import SideSection from "./SideSection";
import CostCalcForm from "./CostCalcForm";

type Props = {};

export default function Calculator({ }: Props) {
  return (
    <div className="flex flex-row bg-white border border-gray-300 mx-20">
      <SideSection />
      <CostCalcForm />
    </div>
  );
}
