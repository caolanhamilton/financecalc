import React from "react";
import calcTotalChargeForCredit from "../utils/totalChargeForCreditOnly";

type Props = {
  loanAmount: number;
  paymentLength: number;
  monthlyPayments: number;
  treatmentCost: string;
  deposit: string;
  apr: number;
};

export default function FinanceExample({
  loanAmount,
  deposit,
  paymentLength,
  monthlyPayments,
  treatmentCost,
  apr,
}: Props) {
  const totalChargeForCredit = calcTotalChargeForCredit(
    loanAmount,
    apr,
    paymentLength
  );
  const totalAmountRepayable = loanAmount + totalChargeForCredit;
  return (
    <div className="px-14 text-center border-gray-300 border p-4  text-bold">
      <p className="text-sm text-green-600 mb-2">Representative example</p>
      <p className="text-xs text-green-600">
        *The total amount of Credit £{loanAmount}. Total charge for credit £
        {totalChargeForCredit}. Total Amount Repayable £{totalAmountRepayable}.
        Repayable by {paymentLength} monthly payments of £{monthlyPayments}.
        Representative {apr}% APR. Example based upon treatment costing £
        {loanAmount} repayable over {paymentLength} months. Acceptance is
        subject to status. Terms and conditions apply.
      </p>
    </div>
  );
}
