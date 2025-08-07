import React from 'react';

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div style={{ top: props.position.top, left: props.position.left }}
    className="card-container note border border-gray-400 bg-[#f1f5f9] rounded-xl p-4 mt-20 shadow-md w-[90%] max-w-[320px] box-border mx-auto my-4 ">
  <div className="bg-blue-50 w-full p-6 rounded-lg shadow-md">
    <h2 className="font-semibold text-[20px] text-gray-900 mb-2 tracking-wide break-words">
      {props.title}
    </h2>
    <p className="mb-3 text-green-400 tracking-wide break-words">{props.content}</p>
    <button
      onClick={handleClick}
      className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-red-600 transition">
      Delete
    </button>
  </div>
</div>

  );
}

export default Notes; 