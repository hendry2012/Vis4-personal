import React from 'react';

function MainContent(props) {
	return (
		<div id="content">
			<h4>What you gonna do?</h4>
			<div className="buttons-container">
				<button onClick={props.onRemoveTwo}>Go to church</button>
				<button onClick={props.onRemoveOne}>Help an elder</button>
				<button onClick={props.onReset}>Receive Baptism</button>
				<button onClick={props.onAddOne}>Tell a lie</button>
				<button onClick={props.onAddTwo}>
					Make a slightly racist joke
				</button>
			</div>
			<button id="clearAll" onClick={props.clearAll}>
				Reborn!
			</button>
		</div>
	);
}

export default MainContent;
