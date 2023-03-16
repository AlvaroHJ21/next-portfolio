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
      className={`flex items-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
        variant === "filled"
          ? "bg-azul-verdoso border-transparent"
          : "border-azul-verdoso bg-transparent"
      }`}
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </button>
  );
}
