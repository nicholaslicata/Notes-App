import { useState } from 'react';
import uniqid from 'uniqid';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('');

  function handleAddNote(text) {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: uniqid()
    }
   
    const newNotes = [
          ...notes,
              newNote
    ]
    setNotes(newNotes);
  }

  function handleDeleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

 

  return (
    <div className="App">
      <div className="header-container">
        <h1>My Notes</h1>
      </div>
        <Search searchText={searchText} setSearchText={setSearchText}/>
        <NoteList notes={notes.filter(note => ((note.text).toLowerCase()).includes(searchText.toLowerCase()))} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
    </div>
  );
}


export default App;
