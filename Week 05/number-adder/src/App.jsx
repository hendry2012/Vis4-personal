import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [total, setTotal] = useState(1);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState({ additions: 0, subtractions: 0 });
  const updateSummary = () => {
    return `You did: ${operationCount.additions} good things\nYou did ${operationCount.subtractions} bad things`;
  };
  const checkTotal = () => {
    if (total > 0) {
      return "You are sinful!";
    } else if (total < 0) {
      return "You are innocent!";
    } else {
      return "You are mediocre= =";
    }
  };

  function SinAddOne() {
    setTotal(total + 1);
    setOperationCount(prevCount => ({
        ...prevCount,
        additions: prevCount.additions + 1,
      }));
    setHistory([...history, 'You lied, SIN +1']);
  }

  function SinAddTwo() {
    setTotal(total + 2);
    setOperationCount(prevCount => ({
        ...prevCount,
        additions: prevCount.additions + 1,
      }));
    setHistory([...history, "You've been racist, SIN +2"]);
  }

  function SinRemoveOne() {
    setTotal(total - 1);
    setOperationCount(prevCount => ({
        ...prevCount,
        subtractions: prevCount.subtractions + 1,
      }));
    setHistory([...history, 'You helped an elder, SIN -1']);
  }

  function SinRemoveTwo() {
    setTotal(total - 2);
    setOperationCount(prevCount => ({
        ...prevCount,
        subtractions: prevCount.subtractions + 1,
      }));
    setHistory([...history, 'You went to church! SIN -2']);
  }

  function SinReset() {
    setTotal(1);
    setHistory([...history, 'You took a bath!!']);
  }

  function Reborn() {
    setTotal(1);
    setHistory([]);
    setOperationCount({ additions: 0, subtractions: 0 });
  }

  function removeHistoryItem(index) {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
  }

  useEffect(() => {
    let newTotal = 1;
    let newAdditions = 0;
    let newSubtractions = 0;

    history.forEach(entry => {
      if (entry.includes('SIN +1')) {
        newTotal += 1;
        newAdditions += 1;
      } else if (entry.includes('SIN +2')) {
        newTotal += 2;
        newAdditions += 1;
      } else if (entry.includes('SIN -1')) {
        newTotal -= 1;
        newSubtractions += 1;
      } else if (entry.includes('SIN -2')) {
        newTotal -= 2;
        newSubtractions += 1;
      }
    });

    setTotal(newTotal);
    setOperationCount({ additions: newAdditions, subtractions: newSubtractions });

  }, [history]);

  return (
    <div className="App">
      <Header />
      <div id="main-content">
        <Sidebar
          total={total}
          history={history}
          summary={updateSummary()} 
          checkTotal={checkTotal()}
          onHistoryClick={removeHistoryItem}

         />
        <MainContent
          onRemoveTwo={SinRemoveTwo}
          onRemoveOne={SinRemoveOne}
          onReset={SinReset}
          onAddOne={SinAddOne}
          onAddTwo={SinAddTwo}
          clearAll={Reborn}
       />
       </div>
    </div>
  );
}

export default App;
