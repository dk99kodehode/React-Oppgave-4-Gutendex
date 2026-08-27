import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/*Redirects the user to differnt sites on click*/}
      <Link className={styles.navlink} to="/">
        Home
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className={styles.navlink} to="/books">
        Browse Books
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className={styles.navlink} to="/books/detailed">
        Detailed Books
      </Link>
    </nav>
  );
}
