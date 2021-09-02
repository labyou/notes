import React from 'react';

export default function ChosenNote({ chosenNote }) {
	let note = chosenNote();
	const copyHandler = () => {
		let copyText = document.getElementById(note.id);
		navigator.clipboard.writeText(copyText.innerHTML);
	};
    return (
		<div className="chosen-container">
			<div className="chosen-note-content">
				<h1 className="chosen-subject">{note.title}</h1>
				<span className="chosen-text" id={note.id}>{note.text}</span>
			<div className="chosen-note-data">
				<span className="data-time">{note.time}</span>
				<span className="data-date">{note.date}</span>
			</div>
			</div>
			<div className="buttons-container">
				<button className="copy-button" onClick={ copyHandler }>Copy</button>
				<button className="share-button">Share</button>
			</div>
		</div>
	);
}
