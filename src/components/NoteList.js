import Note from './Note'
import AddNote from './AddNote'

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <div className='list-container'>
            {notes.map((note) => (
                <Note text={note.text} id={note.id} date={note.date} key={note.id} notes={notes} note={note}
                handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NoteList;