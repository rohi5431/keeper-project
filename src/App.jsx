import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import Notes from './components/Notes'


const App = () =>{
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
  const NOTE_HEIGHT = 150; 
  const FORM_HEIGHT = 200; 
  const NAVBAR_HEIGHT = 50;
  const FOOTER_HEIGHT = 120;

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  for(let i = 0; i < maxAttempts; i++){
    const topPx = Math.floor(Math.random() * (SCREEN_HEIGHT - NOTE_HEIGHT - FOOTER_HEIGHT - FORM_HEIGHT - NAVBAR_HEIGHT)) + NAVBAR_HEIGHT + FORM_HEIGHT;
    const leftPx = Math.floor(Math.random() * (SCREEN_WIDTH - NOTE_WIDTH));

      const overlaps = existPosition.some(pos => {
      const existingTop = (parseFloat(pos.top) / 20) * SCREEN_HEIGHT;
      const existingLeft = (parseFloat(pos.left) / 40) * SCREEN_WIDTH;

      return !(
        leftPx + NOTE_WIDTH < existingLeft ||
        leftPx > existingLeft + NOTE_WIDTH ||
        topPx + NOTE_HEIGHT < existingTop ||
        topPx > existingTop + NOTE_HEIGHT
      );
    });

    if(topPx < NAVBAR_HEIGHT + FORM_HEIGHT) continue;

    if(!overlaps){
      const topVH = (topPx / SCREEN_HEIGHT) * 30;
      const leftVW = (leftPx / SCREEN_WIDTH) * 65;
      return {
      top: `${topVH}vh`,
      left: `${leftVW}vw`
     };
    }
  }

  return null;
}


const addNote = (newNote) =>{
  const existPosition = notes.map((n) => n.position);
  const position = getRandomPosition(existPosition);

  if(!position){
    alert("No space to add note without overlap!");
    return;
  }

  const noteWithPosition = {
    ...newNote,
    id: Date.now(),
    position,
  };

  setNotes(prevNotes => [...prevNotes, noteWithPosition]);
}


const deleteNote = (id) => {
  const deleteNote = window.confirm("Confirm deletion of this note?");
  if(deleteNote){
    setNotes(prevNotes => {
      const newNotes = prevNotes.filter((noteItem, index) => index !== id);
      alert("Note deleted successfully!");
      return newNotes;
    });
  }
};
  return (
    <>
      <div className="relative min-h-[100vh]">
      <Header />
      <Form onAdd={addNote} />
        <div className="gap-6 px-4 py-8 md:mr-30">
       {notes.map((notesItem,index) => {
          
          return <Notes key={index} id={index} title={notesItem.title} content={notesItem.content} position={notesItem.position}  onDelete={deleteNote}/>
        })}
        </div>
      <Footer/>
      </div>
    </>
  )
}

export default App