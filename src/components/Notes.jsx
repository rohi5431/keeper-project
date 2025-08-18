import React from 'react';
import { useState } from 'react';

function Notes(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const images = [
  "/images/img1.gif",
  "/images/img2.jpg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
 ];
  const [currentImage, setCurrentImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );
  function handleImageHover() {
    let newImage;
    do {
      newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === currentImage); 
    setCurrentImage(newImage);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  return (
    <div
      style={{ backgroundColor: '#485460' }}
      className="card-container note border border-gray-400 rounded-xl p-2 sm:p-4 mt-10 sm:mt-20 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md box-border mx-auto my-4 overflow-auto"
    >
      <div className="bg-gradient-to-b from-[#8e99a6] to-[#6c7a89] w-full p-4 sm:p-6 rounded-lg shadow-md">
     {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full min-w-0 p-2 sm:p-3 mb-2 border border-gray-300 rounded text-base sm:text-lg"
              style={{ width: '100%' }}
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full min-w-0 p-2 sm:p-3 mb-3 border border-gray-300 rounded text-base sm:text-lg"
              style={{ width: '100%' }}
              rows="4"
            />
            <div className="flex justify-center gap-3">
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
        <>
    <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 tracking-wide break-words">
      📝{props.title}
    </h3>
        <img
          src={currentImage}
          alt="Note" 
          className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md mb-3"
          onMouseEnter={handleImageHover}
        />
    <p className="mb-3 text-green-400 tracking-wide break-words overflow-auto">{props.content}</p>
    <div className='flex justify-center gap-3'>
    <button
      onClick={handleClick}
      className="bg-[#00bcd4] text-white px-3 py-2 rounded hover:bg-green-500 transition">
      Delete
    </button>
    <button
       onClick={() => setIsEditing(true)}
      className="bg-red-600 hover:bg-green-500 w-20 text-white px-3 py-2 rounded transition">
      Edit
    </button>
    </div>
    </>
      )}
    </div>
  </div>  

  );
}

export default Notes; 