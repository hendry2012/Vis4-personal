import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [total, setTotal] = useState(1);
  const [history, setHistory] = useState([]);

  function SinAddOne() {
    setTotal(total + 1);
    setHistory([...history, 'You lied, SIN +1']);
  }

  function SinAddTwo() {
    setTotal(total + 2);
    setHistory([...history, "You've been racist, SIN +2"]);
  }

  function SinRemoveOne() {
    setTotal(total - 1);
    setHistory([...history, 'You helped an elder, SIN -1']);
  }

  function SinRemoveTwo() {
    setTotal(total - 2);
    setHistory([...history, 'You went to church! SIN -2']);
  }

  function SinReset() {
    setTotal(1);
    setHistory([...history, 'You took a bath!!']);
  }

  function Reborn() {
    setTotal(1)
    setHistory([])
  }

  return (
    <div className="App">
      <Header />
      <div id="main-content">
        <Sidebar
          total={total}
          history={history}
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
