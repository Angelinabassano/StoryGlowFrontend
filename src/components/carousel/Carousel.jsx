import React, { useEffect, useRef } from 'react';
import '../carousel/carousel.css';

const books = [
  {
    title: 'The Waves',
    description: 'In a quiet coastal town, where the ocean hides ancient secrets, a young woman named Valeria discovers an old diary that reveals an enigmatic connection between her family and a hidden power within the sea. As she unravels the mysteries of the past, Valeria must face challenges that threaten to change her life and that of her loved ones. "The Waves" is an evocative novel of mystery and magic that explores the influence of the past on the present and the power concealed in the depths of the ocean.',
    image: 'https://i.pinimg.com/564x/1f/d0/22/1fd022674cb57264ca242ff328b6d3c3.jpg'
  },
  {
    title: 'Tangled Love',
    description: 'In the vibrant world of contemporary cities, Clara’s life takes an unexpected turn when she stumbles upon an old love letter at an antiques market. The letter, written with passion and pain, reveals a story of forbidden love that has been hidden for decades. As Clara searches for the protagonists of this emotional correspondence, she finds herself entangled in a web of secrets, feelings, and unexpected connections. "Tangled Love" is a captivating novel that explores the magic of unsent letters and how the past can intertwine with the present, offering a new perspective on love and fate.',
    image: 'https://i.pinimg.com/564x/03/42/a8/0342a8d974788b0e227c0191b66fcec4.jpg'
  },
  {
    title: 'The Blue Rose',
    description: 'In the heart of an ancient and history-rich city, Laura inherits a house from her grandmother, along with an old diary and a single dried blue rose. As she explores the house, Laura discovers that the rose is the key to unveiling a forbidden romance from the past and a family secret that has remained hidden for decades. As memories and revelations emerge, Laura faces decisions that could change her life forever. "The Blue Rose" is an emotional novel that intertwines love, mystery, and the quest for truth in a journey into the past that redefines the present.',
    image: 'https://i.pinimg.com/564x/ec/30/10/ec30105017d07d7a4981e39342ceb296.jpg'
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
        carouselRef.current.scrollTo({ left: (scrollLeft + clientWidth) % scrollWidth, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const extendedBooks = [...books, ...books];

  return (
    <div className="relative w-full overflow-hidden bg-primary">
      <div 
        className="flex w-full hide-scrollbar" 
        ref={carouselRef} 
        style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
      >
        {extendedBooks.map((book, index) => (
          <div key={index} className="flex-shrink-0 w-full flex items-start justify-center p-4">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-64 h-80 object-cover rounded-lg border-2 border-white"
              />
              <div className="text-left flex-1 p-3">
                <div className="bg-transparent text-white">
                  <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                  <p className="text-lg">{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;