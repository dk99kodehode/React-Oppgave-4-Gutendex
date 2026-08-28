// components and usestates
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebouncer } from "../hooks/useDebouncer";

// styling
import styles from "./NavBar.module.css";

// default search field category is fiction
// will call upon the api with use effect depending if debounced text , category or ulr has changed

export default function SearchField() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Fiction");

  const navigate = useNavigate();

  const debouncedText = useDebouncer(text);

  useEffect(() => {
    navigate(`/search/${category}/${encodeURIComponent(debouncedText)}`, {
      replace: true,
    });
  }, [debouncedText, category, navigate]);

  function handleCategoryChange(e) {
    setCategory(e.target.value);

    console.log("text:", text);
    console.log("debounced:", debouncedText);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

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
  );
}
