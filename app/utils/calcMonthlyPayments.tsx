export default function calcMonthlyPayments(
  loanAmount: number,
  interestPercentage: number,
  paymentLength: number
): number {
  const monthlyInterestRate = interestPercentage / 100 / 12;
  if (monthlyInterestRate === 0) {
    return Number((loanAmount / paymentLength).toFixed(2));
  }
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, paymentLength)) /
    (Math.pow(1 + monthlyInterestRate, paymentLength) - 1);
  return Number(monthlyPayment.toFixed(2));
}
