import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import ChosenNote from './components/ChosenNote';

import moment from 'moment';
import { nanoid } from 'nanoid';

export default function App() {
	let m = moment();
	const [notes, setNotes] = useState([]);
	const [chosenNote, setChosenNote] = useState();
	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-data"));
		if (savedNotes) {
			setNotes(savedNotes);
		};
	}, [])
	useEffect(() => {
		localStorage.setItem('react-notes-data', JSON.stringify(notes))	
	}, [notes])
	const addNote = ({ noteTitle, noteText }) => {
		let data = m.clone();
		const newNote = {
			id: nanoid(),
			title: noteTitle,
			text: noteText,
			time: data.format("h:mm a"),
			date: data.format("D MMMM YYYY")
		};
		setNotes([...notes, newNote]);
	}

	function getChosenNote() {
		return notes.find((note) => note.id === chosenNote);
	}

	return (
		<Router>
			<div className="app">
				<header className="app-header">
					<img
						className="app-header__logo"
						src="http://simpleicon.com/wp-content/uploads/note-2.svg"
						alt="Note Logo"
					/>
					<img
						className="app-header__icon"
						src="http://simpleicon.com/wp-content/uploads/setting2.svg"
						alt="Settings Icon"
					/>
				</header>
				<Switch>
					<Route exact path="/">
						<AddNote handleAddNote={addNote} />
						<NotesList notes={notes} setChosenNote={setChosenNote} />
					</Route>

					{chosenNote ? (
						<Route exact path="/note">
							<ChosenNote chosenNote={ getChosenNote} />
						</Route>
					) : (
						<Redirect to="/" />
					)}
					
				</Switch>
			</div>
		</Router>
	);
}
