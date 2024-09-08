import React from "react";

const BookCard = () => {
  return (
    <div className="relative flex w-full max-w-[13rem] flex-col rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src="https://picsum.photos/200/300"
          alt="Picture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="p-4 bg-secondary">
        <h5 className="text-xl font-semibold text-primary">
          Title
        </h5>
      </div>
    </div>
  );
};

export default BookCard;
