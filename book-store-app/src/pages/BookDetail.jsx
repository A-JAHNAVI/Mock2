import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`https://well-sapphire-muenster.glitch.me/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.name}</h1>
      <p>Category: {book.category}</p>
      <p>Price: ${book.price}</p>
    </div>
  );
};

export default BookDetail;
