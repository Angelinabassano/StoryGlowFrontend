import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookCard from '@/components/card/BookCard';

const HomeProtected = () => {
  const [category, setCategory] = useState('Choose an option');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/books/list/');
        setBooks(response.data);
      } catch {
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setShowCategoryMenu(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex justify-start mt-4 ml-4 space-x-4">
        <button
          onClick={() => setShowCategoryMenu(!showCategoryMenu)}
          aria-haspopup="listbox"
          aria-expanded={showCategoryMenu}
          aria-controls="category-menu"
          className="flex items-center bg-white border border-primary rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary w-56"
        >
          <span className="mr-2 truncate">{category}</span>
          <svg
            className="h-5 w-5 text-primary ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {showCategoryMenu && (
          <div
            id="category-menu"
            role="listbox"
            aria-activedescendant={category}
            className="absolute left-0 top-full mt-2 w-56 bg-white border border-primary rounded-lg shadow-lg z-20"
          >
            <ul className="max-h-60 overflow-y-auto scrollbar-hidden">
              <li>
                <button
                  onClick={() => handleCategoryChange('Choose an option')}
                  className="w-full px-4 py-2 text-left text-primary hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  role="option"
                  aria-selected={category === 'Choose an option'}
                >
                  Choose Genres
                </button>
              </li>
              
              {category.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-primary"
                    role="option"
                    aria-selected={category === cat}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => navigate('/createbook')}
          className="flex items-center bg-white border border-primary rounded-full px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <span className="mr-2">Add Book</span>
          <svg
            className="h-5 w-5 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14m-7-7h14" />
          </svg>
        </button>
      </div>

      <div className="w-full overflow-x-auto py-4 px-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {books.map((book) => {
            const imageUrl = book.cover_photo || '';

            return (
              <BookCard
                key={book.id}
                title={book.title}
                image={imageUrl}
                onClick={() => navigate(`/viewbook/${book.id}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeProtected;
