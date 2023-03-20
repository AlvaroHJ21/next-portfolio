import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

import styles from "./ui.module.css";

export default function ButtonIcons() {
  return (
    <div className={`flex gap-8 text-gray-600 dark:text-white`}>
      <a
        href="https://github.com/AlvaroHJ21"
        className={styles.btnIcon}
        target={"_blank"}
      >
        <AiFillGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/alvaro-huaysara-jauregui-397537223/"
        className={styles.btnIcon}
        target={"_blank"}
      >
        <AiFillLinkedin size={32} />
      </a>
      <a
        href="https://twitter.com/AlvaroHJ21"
        className={styles.btnIcon}
        target={"_blank"}
      >
        <AiFillTwitterCircle size={32} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCDZdX0MdyFi4EgtOiQ_knWQ"
        className={styles.btnIcon}
        target={"_blank"}
      >
        <AiFillYoutube size={32} />
      </a>
    </div>
  );
}
