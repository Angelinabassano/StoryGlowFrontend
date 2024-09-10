import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookCard from '@/components/card/BookCard';

const HomeProtected = () => {
  const [category, setCategory] = useState('Choose an option');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const navigate = useNavigate();

  const categories = ['Fiction', 'Romance', 'Thriller'];

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setShowCategoryMenu(false);
  };

  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      image: 'https://picsum.photos/200/300?book=1',
      description: 'A novel by F. Scott Fitzgerald about the American dream.'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      image: 'https://picsum.photos/200/300?book=2',
      description: 'Harper Lee’s Pulitzer Prize-winning novel about racial injustice.'
    },
    {
      id: 3,
      title: '1984',
      image: 'https://picsum.photos/200/300?book=3',
      description: 'George Orwell’s dystopian novel about totalitarianism.'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      image: 'https://picsum.photos/200/300?book=4',
      description: 'Jane Austen’s classic novel of manners and marriage in 19th century England.'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      image: 'https://picsum.photos/200/300?book=5',
      description: 'J.D. Salinger’s novel about teenage angst and alienation.'
    },
  ];

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
                  Chooses Genres
                </button>
              </li>
              {categories.map((cat) => (
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
          onClick={() => navigate('/addbook')}
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
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              image={book.image}
              onClick={() => navigate(`/viewbook/${book.id}`)} // Redirige al hacer clic
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProtected;
