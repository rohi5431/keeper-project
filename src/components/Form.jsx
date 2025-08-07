import React, { useState } from 'react';

function Form(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes(prevNotes => ({
      ...prevNotes,
      [name]: value
    }));
  }

  const submitNote = (event) => {
  event.preventDefault(); 
  if(!notes.title.trim() || !notes.content.trim()){
     alert("Please fill out both the Title and Content fields.");
     return;
  }
  props.onAdd(notes);
  setNotes({
    title: "",
    content: ""
  });
};


  return (
    <div className='flex justify-center'>
    <div className='relative bg-white p-4 rounded-xl max-w-md mx-auto '>
      <form className='bg-white p-4 rounded-xl border border-gray-300 shadow-md w-md h-auto mx-auto mt-30 relative [@media(max-width:480px)]:w-80 '>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={notes.title}
          placeholder='Title'
          className='w-full p-2 mb-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-400'
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder='Take a note..'
          className='w-full p-2 h-24 border border-gray-300 rounded-md text-black resize-none focus:outline-none focus:ring-2 focus:ring-green-400'
        />
        <button
          type="submit"
          onClick={submitNote}
          style={{ borderRadius: "20px" }}
          className=" absolute bottom-[-15px] right-3 w-10 h-10 bg-blue-400 text-white shadow-md hover:bg-green-500 transition-all flex items-center justify-center"
        >
          Add
        </button>
      </form>
    </div>
    </div>
  );
}

export default Form;
