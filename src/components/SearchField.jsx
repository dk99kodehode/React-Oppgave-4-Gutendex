import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebouncer } from "../hooks/useDebouncer";

import styles from "./NavBar.module.css";

export default function SearchField() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Fiction");

  const navigate = useNavigate();
  const location = useLocation();

  const debouncedText = useDebouncer(text);
  const query = debouncedText;

  useEffect(() => {
    // useLocation returns an object, so we need to check pathname.
    // also changes routing to /search/${category}
    if (location.pathname.startsWith("/search")) {
      navigate(`/search/${category}/${query}`);
    }
  }, [query]);

  // function that changes category and url to the new category with text from option
  function handleCategoryChange(e) {
    const newCategory = e.target.value;
    setCategory(newCategory);

    navigate(`/search/${newCategory}/${text}`);
  }

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
              e.key === "Enter" && navigate(`/search/${category}/${text}`)
            }
          />
        </div>

        <div>
          <select
            className={styles.category}
            value={category}
            onChange={handleCategoryChange}
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
