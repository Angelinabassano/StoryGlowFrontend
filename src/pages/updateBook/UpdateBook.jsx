import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(''); 

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/books/get/${id}/`);
        const bookData = response.data;
        setTitle(bookData.title);
        setDescription(bookData.description);
        setImagePreview(bookData.cover_photo); 
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('cover_photo', image);
    }

    try {
      await axios.put(`http://127.0.0.1:8000/api/v1/books/update/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate(`/viewbook/${id}`); 
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row lg:space-x-6">
        
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <label className="cursor-pointer w-full h-80 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative bg-gray-100">
            {imagePreview ? (
              <img src={imagePreview} alt="Book cover" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500 text-center">Upload a new image</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only"
            />
          </label>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-4 text-primary">Update Book</h1>

          <form onSubmit={handleUpdate} className="w-full space-y-4">
            <div>
              <label htmlFor="title" className="block text-primary font-semibold mb-1">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Book title"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-primary font-semibold mb-1">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Book description"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
