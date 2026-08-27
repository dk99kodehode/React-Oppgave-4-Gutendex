import { useEffect, useState } from "react";
import styles from "./Gutendex.module.css";

export default function Books() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const tenBooks = await fetch("https://gutendex.com/books");
    const tenBooksdata = await tenBooks.json();

    setBooks(tenBooksdata.results);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (!books.length) return <h1>Loading...</h1>;

  return (
    <div className={styles.books}>
      {books.slice(0, 10).map((book) => (
        <div key={book.id}>
          <div className={styles.book}>
            <h3>{book.title}</h3>
            <img src={book.formats["image/jpeg"]} alt={book.title} />
            <p>
              Authored by:{book.authors.map((author) => author.name).join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
