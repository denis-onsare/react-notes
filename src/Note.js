import React, { Component } from 'react'

class Note extends React.Component {
	render () {
		return (
			<div className="note">
				<h1>Hello world</h1>
				<span className="glyphicon glyphicon-trash"></span>
				<span className="glyphicon glyphicon-trash"></span>
			</div>
		);
	}
}

export default Note;