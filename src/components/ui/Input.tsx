import React from "react";

interface Props {
  placeholder?: string;
  multiline?: boolean;
}

export default function Input({ placeholder, multiline }: Props) {
  if (multiline) {
    return (
      <textarea
        className="w-full px-4 py-2 bg-transparent border-2 outline-none resize-none rounded-2xl border-main"
        rows={5}
        placeholder={placeholder}
      ></textarea>
    );
  }
  return (
    <input
      type="text"
      className="w-full px-4 py-2 bg-transparent border-2 rounded-full outline-none border-main"
      placeholder={placeholder}
    />
  );
}
