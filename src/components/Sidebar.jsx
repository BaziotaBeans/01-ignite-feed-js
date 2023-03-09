import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import BackgroundImage from "../assets/Background.jpg";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={BackgroundImage} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/baziotabeans.png"/>

        <strong>Fábio Baziota</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
