export default function calcTotalChargeForCredit(
  loanAmount: number,
  interestPercentage: number,
  paymentLength: number
): number {
  const interest = (interestPercentage / 100) * loanAmount;
  const monthlyPayment = (loanAmount + interest) / paymentLength;
  const totalPaid = monthlyPayment * paymentLength;
  const totalChargeForCredit = totalPaid - loanAmount;
  return Number(totalChargeForCredit.toFixed(2));
}
