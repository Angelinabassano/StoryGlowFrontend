import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const deleteBook = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/books/delete/${id}/`);
      navigate('/homeprotected');
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book');
    }
  };

  const handleUpdateClick = () => {
    navigate(`/updatebook/${id}`);
  };

  const goToHome = () => {
    navigate('/homeprotected');
  };

  if (!book) {
    return null;
  }

  const imageUrl = book.cover_photo || 'path/to/default_image.jpg';

  return (
    <div className="relative mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-300 max-w-full lg:max-w-4xl">
      <button
        onClick={goToHome}
        className="absolute top-4 left-4 bg-primary text-white p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleUpdateClick}
        className="absolute top-4 right-16 bg-primary text-white p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 3l4 4m0 0l-8 8-4 1 1-4 8-8zm0 0L7 13"
          />
        </svg>
      </button>
      
      <button
        onClick={deleteBook}
        className="absolute top-4 right-4 bg-primary text-white p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row items-center lg:items-start p-4 lg:p-8">
        <div className="w-full lg:w-1/2 flex justify-center lg:pr-4 mb-4 lg:mb-0">
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
        <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between">
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
            className="bg-primary text-white px-4 py-2 rounded-lg border mt-4"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
