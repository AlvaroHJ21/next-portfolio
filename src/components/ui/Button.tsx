interface Props {
  text: string;
  variant?: Variant;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
}

type Variant = "filled" | "outline";

export default function Button({
  text,
  variant = "filled",
  suffixIcon,
  prefixIcon,
}: Props) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
        variant === "filled"
          ? "bg-main border-transparent"
          : "border-main bg-transparent"
      }`}
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </button>
  );
}
