"use client";
import React, { useEffect, useState } from "react";
import TextInputField from "./TextInputField";
import DropDown from "./DropDown";
import PrimaryButton from "./PrimaryButton";
import FinanceExample from "./FinanceExample";
import CalculationBox from "./CalculationBox";
import calcMonthlyPayments from "../utils/calcMonthlyPayments";

type Props = {};

export default function CostCalcForm({}: Props) {
  const [treatmentCost, setTreatmentCost] = useState<number>();
  const [deposit, setDeposit] = useState<number>();
  const [paymentLength, setPaymentLength] = useState<number>(6);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [pricePerMonth, setPricePerMonth] = useState<number>(0);

  useEffect(() => {
    if (deposit && treatmentCost && paymentLength) {
      setPricePerMonth(
        calcMonthlyPayments(deposit, treatmentCost, 0, paymentLength)
      );
      setLoanAmount(treatmentCost - deposit);
    }
  }, [deposit, treatmentCost, paymentLength]);

  return (
    <form className="p-6 lg md:w-3/4">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col justify-center space-y-10 lg:w-1/2">
          <TextInputField
            labelText="Treatment Cost"
            setState={setTreatmentCost}
            state={treatmentCost}
          />
          <TextInputField
            labelText="Deposit (max 50% of loan)"
            setState={setDeposit}
            state={deposit}
          />
        </div>
        <div className="flex flex-col justify-center mt-8 lg:items-center lg:mt-0 lg:w-1/2">
          <CalculationBox
            loanAmount={loanAmount}
            pricePerMonth={pricePerMonth}
          />
          <DropDown
            options={[
              "Interest Free 6 Months",
              "Interest Free 10 Months",
              "Interest Free 12 Months",
            ]}
            setPaymentLength={setPaymentLength}
          />
        </div>
      </div>
      <div className="flex flex-col items-end mt-10 space-y-6">
        <FinanceExample />
        <PrimaryButton text="Apply now" />
      </div>
    </form>
  );
}
