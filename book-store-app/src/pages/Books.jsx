import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      let url = `https://well-sapphire-muenster.glitch.me/books?page=${page}&limit=5`;
      if (sort) url += `&sort=${sort}`;
      if (category) url += `&category=${category}`;

      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, [sort, category, page]);

  return (
    <div>
      <h1>Book List</h1>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="price_asc">Price (Low-High)</option>
        <option value="price_desc">Price (High-Low)</option>
      </select>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link> - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
