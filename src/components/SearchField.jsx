import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebouncer } from "../hooks/useDebouncer";
import styles from "./NavBar.module.css";

export default function SearchField() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("novel");
  const navigate = useNavigate();

  const debouncedText = useDebouncer(text);
  const query = debouncedText;

  useEffect(() => {
    if (location === "search") {
      navigate(`search/${category}/${query}`);
    }
  }, [query]);

  return (
    <>
      <div className={styles.searchContainer}>
        <div>
          <input
            className={styles.search}
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && navigate(`search/${category}/${text}`)
            }
          />
        </div>
        <div>
          <select
            className={styles.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Morality">Morality</option>
            <option value="Society">Society</option>
            <option value="Power">Power</option>
            <option value="Justice">Justice</option>
            <option value="Adventure">Adventure</option>
            <option value="Tragedy">Tragedy</option>
            <option value="War">War</option>
            <option value="Philosophy">Philosophy</option>
          </select>
        </div>
      </div>
    </>
  );
}
