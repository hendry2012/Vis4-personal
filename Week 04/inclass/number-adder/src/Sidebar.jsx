import React from 'react';

function Sidebar({total, history}) {


	return (

		<div id ="sidebar">
            <h3>Your Sin</h3>
                <p id="resultid">{total}</p>
            <h3>What you've done:</h3>
	            <ul id="historyList">{
					history.map( (entry, index) => (
						<li key={index}>{entry}</li>
					))
	        	}</ul>
        </div>

	);
}

export default Sidebar;