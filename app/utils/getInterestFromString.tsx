export default function getInterestFromString(str: string): number {
  const regex = /\d+/; // Matches one or more digits
  return Number(str.match(regex)![0]);
}
