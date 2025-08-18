import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import './hideScrollbar.css'
import Notes from './components/Notes'
import './stars.css'


const App = () =>{
  const FOOTER_HEIGHT = 120;
  const [notes, setNotes] = useState([])
    

  useEffect(() => {
    document.body.style.overflowX = "hidden"; 
    document.body.style.overflowY = "auto";   

  return () => {
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";
  };
}, []);

const getRandomPosition = (existPosition) => {
  const maxAttempts = 100;
  const NOTE_WIDTH = 350;
  const NOTE_HEIGHT = 200;
  const FORM_HEIGHT = 220; 
  const NAVBAR_HEIGHT = 60;
  const FOOTER_HEIGHT = 120;

  const CONTAINER_HEIGHT = window.innerHeight - FOOTER_HEIGHT - 40;
  const SCREEN_WIDTH = window.innerWidth;

  for (let i = 0; i < maxAttempts; i++) {
    const minTop = NAVBAR_HEIGHT + FORM_HEIGHT + 20;
    const maxTop = CONTAINER_HEIGHT - NOTE_HEIGHT;
    const topPx = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
    const leftPx = Math.floor(Math.random() * (SCREEN_WIDTH - NOTE_WIDTH - 20)) + 10;

    const overlaps = existPosition.some(pos => {
      const existingTop = parseInt(pos.top);
      const existingLeft = parseInt(pos.left);
      return !(
        leftPx + NOTE_WIDTH < existingLeft ||
        leftPx > existingLeft + NOTE_WIDTH ||
        topPx + NOTE_HEIGHT < existingTop ||
        topPx > existingTop + NOTE_HEIGHT
      );
    });

    if (!overlaps) {
      return {
        top: `${topPx}px`,
        left: `${leftPx}px`
      };
    }
  }
  return null;
}


const addNote = (newNote) =>{
  const noteWithId = {
    ...newNote,
    id: Date.now(),
  };
  setNotes(prevNotes => [...prevNotes, noteWithId]);
}


const deleteNote = (id) => {
  const deleteNoteConfirm = window.confirm("Confirm deletion of this note?");
  if (deleteNoteConfirm) {
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter((noteItem) => noteItem.id !== id);
      alert("Note deleted successfully!");
      return newNotes;
    });
  }
};

  const handleEdit = (id, updatedNote) => {
  setNotes((prevNotes) =>
    prevNotes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    )
  );
};

  return (
    <>
  <div className="min-h-screen w-screen bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f] overflow-x-hidden hide-scrollbar relative" style={{overflowX: 'hidden'}}>
      <div className="stars absolute w-px h-px bg-white animate-twinkle"></div>
      <div className="absolute w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent animate-shoot" style={{ top: "20%", left: "-100px", animationDelay: "0s" }}></div>
      <div className="absolute w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent animate-shoot" style={{ top: "35%", left: "-100px", animationDelay: "1s" }}></div>
      <div className="absolute w-[100px] h-[2px] bg-gradient-to-r from-white to-transparent animate-shoot" style={{ top: "50%", left: "-100px", animationDelay: "2s" }}></div>

  <div className="relative"> 
      <Header />
      <Form onAdd={addNote} />
          <div className="w-full px-4 py-8">
            {Array.from({ length: Math.ceil(notes.length / 3) }).map((_, rowIdx) => {
              const rowNotes = notes.slice(rowIdx * 3, rowIdx * 3 + 3);
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6" key={rowIdx}>
                  {rowNotes.length === 1 && (
                    <div className="sm:col-start-1 md:col-start-2 col-span-1 flex justify-center">
                      <Notes {...rowNotes[0]} onDelete={deleteNote} onEdit={handleEdit} />
                    </div>
                  )}
                  {rowNotes.length === 2 && (
                    <>
                      <div className="flex justify-end">
                        <Notes {...rowNotes[0]} onDelete={deleteNote} onEdit={handleEdit} />
                      </div>
                      <div className="flex justify-start">
                        <Notes {...rowNotes[1]} onDelete={deleteNote} onEdit={handleEdit} />
                      </div>
                    </>
                  )}
                  {rowNotes.length === 3 && (
                    <>
                      <div className="flex justify-center">
                        <Notes {...rowNotes[0]} onDelete={deleteNote} onEdit={handleEdit} />
                      </div>
                      <div className="flex justify-start">
                        <Notes {...rowNotes[1]} onDelete={deleteNote} onEdit={handleEdit} />
                      </div>
                      <div className="flex justify-end">
                        <Notes {...rowNotes[2]} onDelete={deleteNote} onEdit={handleEdit} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
      <Footer/>
      </div>
      </div>
    </>
  )
}

export default App