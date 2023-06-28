type Props = {
  text: string;
  onClickFunction?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

export default function PrimaryButton({ text, onClickFunction, type }: Props) {

  return (
    <button
      type={type}
      className="h-12 font-bold text-white uppercase bg-green-600 rounded-md w-72"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
