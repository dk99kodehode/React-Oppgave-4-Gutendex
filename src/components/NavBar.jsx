import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/">
        Home
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/books">
        Browse Books
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/books/detailed">
        Detailed Books
      </Link>
    </nav>
  );
}
