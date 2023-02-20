import { useState } from "react";
export default function Body({ note, activeNoteId, updateNote }) {
    return (
        <div className="w-full p-2">
            <textarea
                className="w-full bg-white h-96"
                onChange={(event) => {
                    updateNote(event.target.value, activeNoteId);
                }}
                value={note}
            />
        </div>
    );
}
