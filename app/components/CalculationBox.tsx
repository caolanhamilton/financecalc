import React from "react";

type Props = { loanAmount: number; monthlyPayments: number };

export default function CalculationBox({ loanAmount, monthlyPayments }: Props) {
  console.log(monthlyPayments, "monthly payments");
  return (
    <div className="flex flex-col h-48 w-full  mb-4">
      <div className="h-1/3 bg-green-100 rounded-t-md flex flex-row space-x-20 pl-6 items-center text-green-600">
        <p className="font-bold text-md">Loan Amount</p>
        <p className="font-bold text-lg">£{loanAmount}</p>
      </div>
      <div className="h-2/3 bg-green-600 rounded-b-md flex flex-row space-x-20 pl-6 items-center text-white">
        <p className="font-bold text-md">6 Month(0%)</p>
        {monthlyPayments && (
          <p className="font-bold text-lg">{`£${monthlyPayments}pm *`}</p>
        )}
      </div>
    </div>
  );
}
