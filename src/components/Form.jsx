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
    <div className='relative  p-4 rounded-xl max-w-md mx-auto group'>
      <form className=' p-4 rounded-xl bg-[#485460] text-[#eeeeee]  border border-gray-300 shadow-md w-md h-auto mx-auto mt-30 relative [@media(max-width:480px)]:w-80 '>
        <h3 className='text-[20px] text-[#00bcd4] font-semibold mb-3 overflow-hidden whitespace-nowrap border-transparent group-hover:!animate-typewriter group-hover:!animate-cursor'>✍️ Write a Task</h3>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={notes.title}
          placeholder='Title'
          className='w-full bg-gradient-to-b from-[#8e99a6] to-[#6c7a89]  p-2 mb-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2'
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder='Take a note..'
          className='w-full bg-gradient-to-b from-[#8e99a6] to-[#6c7a89]  p-2 h-24 border border-gray-300 rounded-md text-black resize-none focus:outline-none focus:ring-2'
        />
        <div className='flex justify-center gap-3 mt-2'>
        <button
          type="submit"
          onClick={submitNote}
          style={{ borderRadius: "10px" }}
          className="right-3 w-20 h-10 bg-[#00bcd4] shadow-md hover:bg-green-500 transition-all flex items-center justify-center"
        >
          Add
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
