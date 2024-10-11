import React from "react";

function Sidebar({ total, history, summary, checkTotal, onHistoryClick }) {
  return (
    <div id="sidebar">
      <h3>Your Sin</h3>
      <p id="resultid">{total}</p>
      <p id="totalMessage">{checkTotal}</p>
      <p id="summary">{summary}</p>

      <h3>What you've done:</h3>
      <ul id="historyList">
        {history.map((entry, index) => (
          <li
            key={index}
            onClick={() => onHistoryClick(index)}
            style={{ cursor: "pointer" }}
          >
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
