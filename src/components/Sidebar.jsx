import { React } from "react";
export default function Sidebar({
    createNote,
    notes,
    setNotes,
    activeNote,
    activateNote,
    setNotesCount,
    notesCount,
}) {
    return (
        <div className="w-1/3">
            <label
                className="flex justify-between w-full text-2xl cursor-pointer"
                onClick={() => {
                    createNote(`Note ${notesCount}`);
                    setNotesCount(notesCount + 1);
                }}
            >
                <span>New Note</span>
                <span className="flex items-center justify-center w-8 h-8 text-white bg-violet-400">
                    +
                </span>
            </label>
            <div className="grid gap-3 p-2">
                {notes.length !== 0 ? (
                    notes.map((note, index) => {
                        let noteObject = JSON.parse(note);
                        return (
                            <label
                                className={
                                    activeNote === noteObject.id
                                        ? "text-white bg-gray-700"
                                        : ""
                                }
                                key={index}
                                onClick={() => activateNote(noteObject.id)}
                            >
                                {noteObject.name.substring(0, 15)}
                            </label>
                        );
                    })
                ) : (
                    <>No notes</>
                )}

                {notes.length !== 0 && (
                    <label
                        className="cursor-pointer"
                        onClick={() => {
                            localStorage.setItem("notes", "");
                            setNotes([]);
                            setNotesCount(0);
                        }}
                    >
                        Clear notes
                    </label>
                )}
            </div>
        </div>
    );
}
