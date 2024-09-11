import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/books/get/${id}/`);
        setBook(response.data);
      } catch {
        setBook(null);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return null;
  }

  const imageUrl = book.cover_photo || 'path/to/default_image.jpg';

  return (
    <div className="max-w-4xl mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start pt-6 lg:pt-8">
        <div className="w-full lg:w-1/3 flex justify-center lg:pl-4 pt-4 lg:pt-0">
          <img
            className="w-48 h-72 object-cover rounded-lg shadow-md"
            src={imageUrl}
            alt={book.title || 'Book cover'}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'path/to/default_image.jpg';
            }}
          />
        </div>
        <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between pt-4 lg:pt-0">
          <h2 className="text-2xl font-semibold mb-2 text-center lg:text-left text-primary">
            {book.title || 'Book Title'}
          </h2>
          <div className="flex-grow">
            <p className="text-base break-words">
              {book.description || 'No description available.'}
            </p>
          </div>
          <button
            onClick={() => alert(`Reading ${book.title}`)}
            className="bg-white text-primary px-4 py-2 rounded-lg border border-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary mt-4"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
