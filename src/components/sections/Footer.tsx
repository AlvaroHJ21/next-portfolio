import AOS from "aos";
import "aos/dist/aos.css";

import ButtonIcons from "../ui/ButtonIcons";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-16 bg-gray-50 dark:bg-background-light">
      <div data-aos="fade-up">
        <ButtonIcons />
      </div>
      <p className="text-gris"> &copy; Alvaro Huaysara. 2023</p>
    </div>
  );
}
