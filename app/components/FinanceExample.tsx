import React from "react";

type Props = {};

export default function FinanceExample({}: Props) {
  return (
    <div className="px-14 text-center border-gray-300 border p-4  text-bold">
      <p className="text-sm text-green-600 mb-2">Representative example</p>
      <p className="text-xs text-green-600">
        *The total amount of Credit £9996. Total charge for credit £0.00. Total
        Amount Repayable £9996.00. Repayable by 10 monthly payments of £999.60.
        Representative 0% APR. Example based upon treatment costing £9996
        repayable over 10 months. Acceptance is subject to status. Terms and
        conditions apply.
      </p>
    </div>
  );
}
