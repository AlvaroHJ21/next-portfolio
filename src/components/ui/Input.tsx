import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./ui.module.css";

interface Props {
  placeholder?: string;
  multiline?: boolean;
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function Input({
  placeholder,
  multiline,
  name = "",
  value = "",
  onChange = () => {},
  type
}: Props) {
  if (multiline) {
    return (
      <textarea
        className={`w-full px-4 py-2 bg-transparent border-2 outline-none resize-none rounded-2xl border-main text-black dark:text-white ${styles.input}`}
        rows={5}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    );
  }
  return (
    <input
      type={type}
      className={`w-full px-4 py-3 bg-transparent border-2 rounded-full outline-none border-main text-black dark:text-white ${styles.input}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
