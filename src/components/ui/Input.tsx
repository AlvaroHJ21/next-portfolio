import styles from './ui.module.css';

interface Props {
  placeholder?: string;
  multiline?: boolean;
}

export default function Input({ placeholder, multiline }: Props) {
  if (multiline) {
    return (
      <textarea
        className={`w-full px-4 py-2 bg-transparent border-2 outline-none resize-none rounded-2xl border-main ${styles.input}`}
        rows={5}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      type="text"
      className={`w-full px-4 py-2 bg-transparent border-2 rounded-full outline-none border-main ${styles.input}`}
      placeholder={placeholder}
    />
  );
}
