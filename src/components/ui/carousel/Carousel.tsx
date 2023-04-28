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
  angularLogo,
  laravelLogo,
  figmaLogo,
  firebaseLogo,
  flutterLogo,
  gitLogo,
  githubLogo,
  mysqlLogo,
  phpLogo,
  postgresLogo,
  reduxLogo,
  strapiLogo,
} from "@/assets";
import styles from "../ui.module.css";
import { useState } from "react";

const listItems1 = [
  bootstrapLogo,
  CSSLogo,
  HTMLLogo,
  javascriptLogo,
  nextjsLogo,
  nextUILogo,
  reactLogo,
  reduxLogo,
  vueLogo,
  angularLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  laravelLogo,
  figmaLogo,
  flutterLogo,
  bootstrapLogo,
  CSSLogo,
  HTMLLogo,
  javascriptLogo,
  nextjsLogo,
  nextUILogo,
  reactLogo,
  reduxLogo,
  vueLogo,
  angularLogo,
  sassLogo,
  tailwindLogo,
  vueLogo,
  laravelLogo,
  figmaLogo,
  flutterLogo,
];
const listItems2 = [
  nodeJSLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  mysqlLogo,
  firebaseLogo,
  dockerLogo,
  gitLogo,
  githubLogo,
  phpLogo,
  strapiLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  firebaseLogo,
  nodeJSLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  mysqlLogo,
  firebaseLogo,
  dockerLogo,
  gitLogo,
  githubLogo,
  phpLogo,
  strapiLogo,
  expressLogo,
  mongoDBLogo,
  postgresLogo,
  firebaseLogo,
];

export default function Carousel() {
  const [items, setItems] = useState(listItems1);
  const [items2, setItems2] = useState(listItems2);

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
          {items2.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-20 py-6 bg-gray-300 rounded-lg group dark:bg-gray-800"
            >
              <img
                className="h-12 max-w-[120px] grayscale group-hover:grayscale-0 transition-all"
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
