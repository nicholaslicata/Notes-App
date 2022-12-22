
function Note({ note, handleDeleteNote }) {
    return (
        <div className='note-container'>
            <span className='note-text'>{note.text}</span>
            <div className='note-footer'>
                <p className='note-date'>{note.date}</p>
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note;