import Calculator from "./components/Calculator";
import LegalDisclaimer from "./components/LegalDisclaimer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <Calculator />
      <LegalDisclaimer />
    </div>
  );
}
