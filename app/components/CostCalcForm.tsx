"use client";
import React, { useEffect, useState, useContext } from "react";
import DropDown from "./DropDown";
import FinanceExample from "./FinanceExample";
import CalculationBox from "./CalculationBox";
import calcMonthlyPayments from "../utils/calcMonthlyPayments";
import { UserContext } from "../page";
import { postApplication } from "../../apiservices/applicationApiService";
import PrimaryButton from "./PrimaryButton";
import NumberInput from "./NumberInput";
import loanMap from "../utils/loanMap";
import PopUpOptions from "./PopUpOptions";
import ErrorBox from "./ErrorBox";

export default function CostCalcForm() {
  const [treatmentCost, setTreatmentCost] = useState<string>("");
  const [deposit, setDeposit] = useState<string>("");
  const [paymentLength, setPaymentLength] = useState(6);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [apr, setApr] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLogicError, setFormLogicError] = useState({
    highDepositError: false,
    negativeTreatmentError: false,
  });
  const { userJWT } = useContext(UserContext);

  useEffect(() => {
    if (deposit && treatmentCost && paymentLength) {
      setMonthlyPayments(calcMonthlyPayments(loanAmount, apr, paymentLength));
      setLoanAmount(Number(treatmentCost) - Number(deposit));
    }
  }, [loanAmount, apr, paymentLength, deposit, treatmentCost]);

  useEffect(() => {
    if (Number(treatmentCost) < Number(deposit)) {
      setFormLogicError((prevState) => ({
        ...prevState,
        highDepositError: true,
      }));
    }
    if (Number(treatmentCost) / 2 < Number(deposit)) {
      setFormLogicError((prevState) => ({
        ...prevState,
        negativeTreatmentError: true,
      }));
    } else {
      setFormLogicError({
        highDepositError: false,
        negativeTreatmentError: false,
      });
    }
  }, [treatmentCost, deposit]);

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
    setFormSubmitted(true);
  }
  return (
    <>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="p-6 lg md:w-3/4">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="flex flex-col justify-center space-y-10 lg:w-1/2">
              <NumberInput
                labelText="Treatment Cost"
                setState={setTreatmentCost}
                state={treatmentCost}
              />
              {formLogicError.negativeTreatmentError && (
                <ErrorBox text="Deposit cannot exceed loan" />
              )}
              <NumberInput
                labelText="Deposit (max 50% of loan)"
                setState={setDeposit}
                state={deposit}
              />
              {formLogicError.highDepositError && (
                <ErrorBox text="Deposit max 50% of loan" />
              )}
            </div>
            <div className="flex flex-col justify-center mt-8 lg:items-center lg:mt-0 lg:w-1/2">
              {treatmentCost && deposit && (
                <>
                  <CalculationBox
                    loanAmount={loanAmount}
                    monthlyPayments={monthlyPayments}
                    apr={apr}
                  />
                  <DropDown
                    options={loanMap}
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
            {!formLogicError.highDepositError &&
              !formLogicError.negativeTreatmentError && (
                <PrimaryButton text="Apply now" type="submit" />
              )}
          </div>
        </form>
      ) : (
        <PopUpOptions />
      )}
    </>
  );
}
