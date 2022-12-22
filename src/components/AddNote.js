import { useState } from 'react';

function AddNote({ handleAddNote } ) {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 200;

    function handleChange(e) {
        if (characterLimit - e.target.value.length >= 0) {
        setNoteText(e.target.value);
        }
    }

    function handleSaveNote() {
        if (noteText) {
        handleAddNote(noteText);
        setNoteText('');
        }
    }
 
    return (
        <div className='new-note-container'>
            <textarea onChange={handleChange} value={noteText} rows='8' cols='25' placeholder='Type to enter a note...' autoComplete="off"></textarea>
            <div className='count-container'>
                <p>{characterLimit - noteText.length} Remaining</p>
                <button onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;