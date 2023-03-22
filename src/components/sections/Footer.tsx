import { RevealWrapper } from "next-reveal";
import ButtonIcons from "../ui/ButtonIcons";

export default function Footer() {
  return (
      <div className="flex flex-col items-center gap-4 py-16 bg-gray-50 dark:bg-background-light">
        <ButtonIcons />
        <p className="text-gris"> &copy; Alvaro Huaysara. 2023</p>
      </div>
  );
}
