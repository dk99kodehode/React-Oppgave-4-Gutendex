import { useEffect, useState } from "react";

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
    <div>
      {books.slice(0, 10).map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.authors.map((author) => author.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
