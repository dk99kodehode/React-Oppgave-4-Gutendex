// routing and usestates
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styling
import styles from "./Gutendex.module.css";

export default function Books() {
  // checkes whether the category exists if not default back to fiction
  // if there is a query for example "thriller" call the api again
  const [books, setBooks] = useState([]);
  const { category = "Thriller", query = "" } = useParams();

  const fetchBooks = async () => {
    const url = query
      ? `https://gutendex.com/books?topic=${encodeURIComponent(category)}&search=${encodeURIComponent(query)}`
      : `https://gutendex.com/books?topic=${encodeURIComponent(category)}`;

    const response = await fetch(url);

    const data = await response.json();

    setBooks(data.results);
  };

  // will call on the api again if a category or query is changed
  useEffect(() => {
    fetchBooks();
  }, [category, query]);

  // if books from api hasnt fetched yet, return loading
  if (!books) return <h1>Loading...</h1>;

  // when books has finally fetched return this
  // the api returns 32 results, i sliced them down to 21
  return (
    <div className={styles.books}>
      {books.slice(0, 21).map((book) => (
        <div key={book.id}>
          <div className={styles.book}>
            <h3 className={styles.booktitle}>{book.title}</h3>

            <img src={book.formats["image/jpeg"]} alt={book.title} />

            <p>
              Authored by:
              {book.authors.map((author) => author.name).join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
