import React, { useState } from 'react';
import './App.css';

function App() {
	// let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
	let [accordionStatus, setAccordionStatus] = useState<boolean>(true)
	let [on, setOn] = useState(false)

	return (
		<div className="App">
			hi!
		</div>

	);
}

export default App;
