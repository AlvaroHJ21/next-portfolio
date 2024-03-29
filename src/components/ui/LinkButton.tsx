import Link from "next/link";

import styles from './ui.module.css';

interface Props {
  href: string;
  text: string;
  target?: string;
  download?: string;
  variant?: Variant;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
}

type Variant = "filled" | "outline";

export default function LinkButton({
  href,
  text,
  target,
  download,
  variant = "filled",
  suffixIcon,
  prefixIcon,
}: Props) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 ${
        variant === "filled"
          ? "bg-main border-transparent text-white"
          : "border-main bg-transparent text-main dark:text-white"
      } ${styles.btn}`}
      target={target}
      download={download}
    >
      {prefixIcon}
      {text}
      {suffixIcon}
    </Link>
  );
}
