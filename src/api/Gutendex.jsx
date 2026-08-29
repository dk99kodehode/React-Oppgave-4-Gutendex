import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Gutendex.module.css";

export default function Books() {
  // puts books in array
  // default loading to true and false whenever finsished loading

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSummary, setShowSummary] = useState(null);

  const { category = "Fiction", query = "" } = useParams();

  //
  const fetchBooks = async () => {
    setLoading(true);

    try {
      const url = query
        ? `https://gutendex.com/books?search=${encodeURIComponent(query)}`
        : `https://gutendex.com/books?topic=${encodeURIComponent(category)}`;

      const response = await fetch(url);

      // if no response thorw error with response status
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      // double checks for errors and if no errors setLoading false and set book in data.results or an array
      setBooks(data.results || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // 1 time effect that pulls fetches again if category or query is changed
  useEffect(() => {
    fetchBooks();
  }, [category, query]);

  // if still fetching URL return with loading
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // finally fetched return this
  return (
    <div className={styles.books}>
      {books.slice(0, 21).map((book) => (
        <div key={book.id}>
          <div className={styles.book}>
            <h3 className={styles.booktitle}>{book.title}</h3>

            <img
              onClick={() => {
                setShowSummary(showSummary === book.id ? null : book.id);
              }}
              src={book.formats?.["image/jpeg"]}
              alt={book.title}
              className={styles.card}
            />

            <p className={styles.cardCategory}>
              {book.subjects?.[0] || "No category"}
            </p>

            <p className={styles.author}>
              Authored by:{" "}
              {book.authors?.map((author) => author.name).join(", ") ||
                "Unknown author"}
            </p>

            {showSummary === book.id && (
              <p className={styles.summary}>
                Summary: {book.summaries?.[0] || "No summary available"}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
