import React from 'react'
import { Link } from "react-router-dom";

export default function Note({ id, title, text, time, date, setChosenNote }) {
	const copyHandler = () => {
		let copyText = document.getElementById(id);
		navigator.clipboard.writeText(copyText.innerHTML);
	}
	return (
		<div className="note" onClick={() => setChosenNote(id) }>
			<Link to={`/note?title=${title}`}>
				<div className="note-content">
				<span className="note-content-subject">{title}</span>
				<span className="note-content-text" id={ id }>{text}</span>
				</div>
				<div className="note-data">
					<span className="note-data-time">{time}</span>
					<span className="note-data-date">{date}</span>
				</div>
			</Link>
			<div className="note-footer">
				<i className="lab la-2x la-facebook-f facebook-icon"></i>
				<i className="las la-2x la-copy" onClick={ copyHandler }></i>
			</div>
		</div>
	);
}
