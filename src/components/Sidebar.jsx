import React from "react";

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id} className="w-full">
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "bg-[#4a4e74]" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-primary">
                    {note.body.split("\n")[0].substring(0, 21)}
                </h4>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="w-1/5 h-full overflow-y-auto">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button
                    className="outline-none cursor-pointer bg-[#4a4e74] border-none text-white rounded-md h-8 w-8"
                    onClick={props.newNote}
                >
                    +
                </button>
            </div>
            {noteElements}
        </section>
    );
}
