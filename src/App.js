import './App.css';
import React, { useState } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <h1 className="main__header">hydrapp</h1>
      <div className="main__glass">
        <span className="main__value value__js">{ count}</span>
      </div>
      <button
        className="main__add add__button__js"
        onClick={() => {
          
          setCount(count+1);
        }}
      >
        dodaj szklankę
      </button>
      <button
        className="main__subtract subtract__button__js"
        onClick={() => {
          setCount(count-1);
        }}
      >
        usuń szklankę
      </button>
    </main>
  );
};

export default App;
