import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    image: 'https://picsum.photos/300/400?book=1',
    description: 'In "The Great Gatsby," F. Scott Fitzgerald captures the essence of the Roaring Twenties with a story of love, ambition, and the American Dream. Set in the opulent world of 1920s New York, the novel explores the life of Jay Gatsby, a mysterious millionaire who throws lavish parties in hopes of reuniting with his lost love, Daisy Buchanan. As the story unfolds, it delves into themes of wealth, social status, and the pursuit of happiness, culminating in a tragic yet profound commentary on the American Dream.'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    image: 'https://picsum.photos/300/400?book=2',
    description: 'Harper Lee’s "To Kill a Mockingbird" is a poignant exploration of racial injustice and moral growth in the American South. Narrated by Scout Finch, a young girl whose father, Atticus Finch, is a principled lawyer defending a black man accused of raping a white woman, the novel offers a powerful examination of prejudice, empathy, and the loss of innocence. Through Scout’s eyes, readers witness the complexities of human nature and the struggles of a community grappling with its conscience.'
  },
  {
    id: 3,
    title: '1984',
    image: 'https://picsum.photos/300/400?book=3',
    description: 'George Orwell’s "1984" presents a chilling vision of a dystopian future where totalitarianism reigns supreme. The novel is set in a world under constant surveillance by the Party, led by the enigmatic Big Brother. Winston Smith, the protagonist, works for the Party rewriting history to fit its propaganda, but he secretly yearns for rebellion and truth. Orwell’s exploration of themes like oppression, manipulation, and the erosion of personal freedom serves as a stark warning about the dangers of unchecked political power.'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    image: 'https://picsum.photos/300/400?book=4',
    description: 'Jane Austen’s "Pride and Prejudice" is a beloved classic that deftly combines romance with social commentary. Set in early 19th-century England, the novel follows Elizabeth Bennet, an intelligent and independent young woman, as she navigates issues of class, marriage, and morality. Through her evolving relationship with the wealthy but aloof Mr. Darcy, Austen explores themes of pride, prejudice, and the complexities of human relationships, all while delivering sharp and witty observations about society.'
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    image: 'https://picsum.photos/300/400?book=5',
    description: 'J.D. Salinger’s "The Catcher in the Rye" is a seminal work of modern American literature that delves into the angst and alienation of adolescence. The novel follows Holden Caulfield, a disenchanted teenager who has been expelled from his prep school and wanders through New York City in search of meaning and connection. Salinger’s portrayal of Holden’s inner turmoil and his critique of societal norms resonate with readers as an exploration of the struggles of growing up and the quest for authenticity.'
  },
];

const ViewBook = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBook = () => {
      const foundBook = mockBooks.find(b => b.id === parseInt(id, 10));
      if (foundBook) {
        setBook(foundBook);
      } else {
        setError('Book not found');
      }
    };

    fetchBook();
  }, [id]); 

  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>; 

  if (!book) return <div className="text-gray-500 text-center mt-4">Book not found</div>; 

  return (
    <div className="max-w-lg mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row bg-white p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <img
            className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
            src={book.image}
            alt={book.title}
          />
        </div>
        <div className="p-6 flex flex-col justify-between bg-white md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left text-primary">
            {book.title}
          </h2>
          <p className="text-base mb-4">{book.description}</p>
          <button
            onClick={() => alert(`Reading ${book.title}`)}
            className="bg-white text-primary px-4 py-2 rounded-lg border border-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
