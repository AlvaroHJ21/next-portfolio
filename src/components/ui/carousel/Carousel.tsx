import {
  bootstrapLogo,
  CSSLogo,
  dockerLogo,
  expressLogo,
  HTMLLogo,
  javascriptLogo,
  mongoDBLogo,
  nextjsLogo,
  nextUILogo,
  nodeJSLogo,
  reactLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
} from "@/assets";
import styles from "../ui.module.css";
import { useEffect, useState } from "react";

const listItems = [
  bootstrapLogo,
  CSSLogo,
  dockerLogo,
  expressLogo,
  HTMLLogo,
  javascriptLogo,
  mongoDBLogo,
  nextjsLogo,
  nextUILogo,
  nodeJSLogo,
  reactLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  bootstrapLogo,
  CSSLogo,
  dockerLogo,
  expressLogo,
  HTMLLogo,
  javascriptLogo,
  mongoDBLogo,
  nextjsLogo,
  nextUILogo,
  nodeJSLogo,
  reactLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
];

export default function Carousel() {
  const [items, setItems] = useState(listItems);

  return (
    <div className="flex flex-col gap-4 pb-20">
      <div className="flex overflow-hidden">
        <div className={`flex flex-shrink-0 gap-4 ${styles.animationLeft}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-20 py-6 bg-gray-300 rounded-lg group dark:bg-gray-800"
            >
              <img
                className="h-12 max-w-[120px] grayscale group-hover:grayscale-0"
                src={item}
                alt={`logo ${item}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end overflow-hidden">
        <div className={`flex flex-shrink-0 gap-4 ${styles.animationRight}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-20 py-6 bg-gray-300 rounded-lg group dark:bg-gray-800"
            >
              <img
                className="h-12 max-w-[120px] grayscale group-hover:grayscale-0"
                src={item}
                alt={`logo ${item}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
