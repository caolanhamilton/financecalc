export default function calcMonthlyPayments(
  deposit: number,
  treatmentCost: number,
  interestPercentage: number,
  paymentLength: number
): number {
  const interest = (interestPercentage / 100) * treatmentCost;
  const monthlyPayment = (treatmentCost - deposit + interest) / paymentLength;
  return Math.round(monthlyPayment);
}
