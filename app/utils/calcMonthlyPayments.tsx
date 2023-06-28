export default function calcMonthlyPayments(
  loanAmount: number,
  interestPercentage: number,
  paymentLength: number
): number {
  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = interestPercentage / 100 / 12;
  // Check if the interest rate is 0
  if (monthlyInterestRate === 0) {
    // Return the loan amount divided by the number of payments
    return Number((loanAmount / paymentLength).toFixed(2));
  }
  // Calculate the monthly payment using the formula
  // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
  // where P is the monthly payment, L is the loan amount,
  // c is the monthly interest rate, and n is the number of payments
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, paymentLength)) /
    (Math.pow(1 + monthlyInterestRate, paymentLength) - 1);
  return Number(monthlyPayment.toFixed(2));
}
