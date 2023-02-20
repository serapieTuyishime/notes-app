import "./App.css";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
function App() {
    const [notes, setNotes] = useState(
        () => [localStorage.getItem("notes")] || []
    );
    const [notesCount, setNotesCount] = useState(0);
    const [activeNote, setActiveNote] = useState(null);
    const [activeNoteText, setActiveNoteText] = useState(" ");
    function createNote(name) {
        const noteObject = { id: notesCount, name };
        localStorage.setItem("notes", JSON.stringify(noteObject));
        setNotes([...notes, localStorage.getItem("notes")]);
        setNotesCount(notesCount + 1);
    }

    function activateNote(clickedNote) {
        if (notes.length === 0) {
            console.warn("There are no notes at the moment");
            return;
        }
        let noteIndex = notes.findIndex(
            (el) => JSON.parse(el).id === clickedNote
        );

        setActiveNoteText(
            noteIndex !== -1 ? JSON.parse(notes[noteIndex]).name : "no"
        );
        setActiveNote(clickedNote);
    }
    function updateNote(text, id) {
        let noteIndex = notes.findIndex((el) => JSON.parse(el).id === id);
        let tempNotes = [...notes];
        tempNotes[noteIndex] = JSON.stringify({
            id: id,
            name: text,
        });
        setNotes(tempNotes);
        setActiveNoteText(text);
    }
    return (
        <div className="flex w-4/5 mx-auto mt-24 bg-gray-300 lg:w-3/5">
            <Sidebar
                createNote={createNote}
                notes={notes}
                setNotes={setNotes}
                setActiveNote={setActiveNote}
                activeNote={activeNote}
                setNotesCount={setNotesCount}
                notesCount={notesCount}
                activateNote={activateNote}
            />
            <Body
                note={activeNoteText}
                activeNoteId={activeNote}
                updateNote={updateNote}
            />
        </div>
    );
}

export default App;
