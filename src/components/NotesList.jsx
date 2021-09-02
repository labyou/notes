import React from 'react'

import Note from './Note'

export default function NotesList({notes, setChosenNote}) {
	return (
		<div className="notes-list">
			{notes.map((note) => {
				return (
					<Note
						id={note.id}
						title={note.title}
						text={note.text}
						time={note.time}
						date={note.date}
						key={note.id}
						setChosenNote={setChosenNote}
					/>
				);
			})}
		</div>
	);
}
