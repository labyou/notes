import React, { useState } from 'react';

export default function AddNote({ handleAddNote }) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const handleSave = () => {
        if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
            handleAddNote({ noteTitle, noteText });
            setNoteTitle('');
            setNoteText('');
        }
    }
    return (
        <div className="add-note-container">
            <span className="add-note-containet__header">Create new note</span>
            <textarea
                name=""
                id="title"
                cols="30"
                rows="3"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => {
                    setNoteTitle(e.target.value);
                }}
            ></textarea>
            <textarea
                name=""
                id="text"
                cols="30"
                rows="10"
                placeholder="Text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
            <div className="save-button-container">
                <button className="save-button" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
	);
}
