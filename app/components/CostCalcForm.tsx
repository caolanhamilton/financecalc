"use client";
import React, { useEffect, useState, useContext } from "react";
import TextInputField from "./NumberInput";
import DropDown from "./DropDown";
import FinanceExample from "./FinanceExample";
import CalculationBox from "./CalculationBox";
import calcMonthlyPayments from "../utils/calcMonthlyPayments";
import { UserContext } from "../page";
import { postApplication } from "../../apiservices/applicationApiService";
import PrimaryButton from "./PrimaryButton";
import NumberInput from "./NumberInput";
import loanTypes from "../utils/loanTypes";

export default function CostCalcForm() {
  const [treatmentCost, setTreatmentCost] = useState<string | undefined>();
  const [deposit, setDeposit] = useState<string | undefined>();
  const [paymentLength, setPaymentLength] = useState(6);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [apr, setApr] = useState(0);
  const { userJWT } = useContext(UserContext);

  useEffect(() => {
    if (deposit && treatmentCost && paymentLength) {
      setMonthlyPayments(calcMonthlyPayments(loanAmount, apr, paymentLength));
      setLoanAmount(Number(treatmentCost) - Number(deposit));
    }
  }, [loanAmount, apr, paymentLength, deposit, treatmentCost]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postApplication(
      {
        treatment_cost: Number(treatmentCost)!,
        deposit: Number(deposit!),
        loan_amount: loanAmount,
        monthly_payments: monthlyPayments,
        payment_length: paymentLength,
        apr,
      },
      userJWT
    );
  }
  return (
    <form onSubmit={handleSubmit} className="p-6 lg md:w-3/4">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col justify-center space-y-10 lg:w-1/2">
          <NumberInput
            labelText="Treatment Cost"
            setState={setTreatmentCost}
            state={treatmentCost}
          />
          <NumberInput
            labelText="Deposit (max 50% of loan)"
            setState={setDeposit}
            state={deposit}
          />
        </div>
        <div className="flex flex-col justify-center mt-8 lg:items-center lg:mt-0 lg:w-1/2">
          {treatmentCost && deposit && (
            <>
              <CalculationBox
                loanAmount={loanAmount}
                monthlyPayments={monthlyPayments}
              />
              <DropDown
                options={loanTypes}
                setApr={setApr}
                setPaymentLength={setPaymentLength}
              />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end mt-10 space-y-6">
        {treatmentCost && deposit && (
          <FinanceExample
            loanAmount={loanAmount}
            apr={apr}
            paymentLength={paymentLength}
            monthlyPayments={monthlyPayments}
            treatmentCost={treatmentCost}
            deposit={deposit}
          />
        )}
        <PrimaryButton text="Apply now" type="submit" />
      </div>
    </form>
  );
}
