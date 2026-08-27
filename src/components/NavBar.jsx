import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/*Redirects the user to home page on click*/}
      <Link className={styles.navlink} to="/">
        Home
      </Link>
    </nav>
  );
}
