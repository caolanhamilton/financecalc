import React from "react";

type Props = { loanAmount: number; monthlyPayments: number; apr: number };

export default function CalculationBox({
  loanAmount,
  monthlyPayments,
  apr,
}: Props) {
  return (
    <div className="flex flex-col h-48 w-full  mb-4">
      <div className="h-1/3 bg-green-100 rounded-t-md flex flex-row space-x-20 px-2 md:pl-6 items-center text-green-600">
        <p className="font-bold text-sm md:text-md lg:text-lg">Loan Amount</p>
        <p className="font-bold text-sm md:text-md lg:text-lg">£{loanAmount}</p>
      </div>
      <div className="h-2/3 bg-green-600 rounded-b-md flex flex-row space-x-20 px-2 md:pl-6 items-center text-white">
        <p className="font-bold text-sm md:text-md lg:text-lg">
          6 Month ({apr}%)
        </p>
        {monthlyPayments && (
          <p className="font-bold text-sm md:text-md lg:text-lg">{`£${monthlyPayments}pm`}</p>
        )}
      </div>
    </div>
  );
}
