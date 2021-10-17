import './App.css';
import React, { useState, useEffect } from "react";

const countValidator =( count ) => count < 0 ? 0 : count;

const Header = () => <h1 className="main__header">hydrapp</h1>;

const Glass = (props) => {
  const { count } = props;
  return (<div className="main__glass">
    <span className="main__value">{count}</span>
  </div>)
}

const App = (props) => {
  const [count, setCount] = useState(0);
  const [dateKey, setDateKey] = useState('');
 useEffect(() => {
   const date = new Date();
   setDateKey(date.toLocaleDateString());

   let realValue = localStorage.getItem(dateKey)
     ? localStorage.getItem(dateKey)
     : localStorage.setItem(dateKey, 0);
   realValue = parseInt(localStorage.getItem(dateKey));

   setCount(realValue);
 }, [dateKey]);
  return (
    <main className="main">
      <Header></Header>
      <Glass count={count} ></Glass>
      <button
        className="main__add"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
          localStorage.setItem(dateKey, count);
        }}
      >dodaj szklankę</button>
      <button
        className="main__subtract"
        onClick={() => {
          setCount(countValidator(count - 1));
          localStorage.setItem(dateKey, count);
        }}
      >
        usuń szklankę
      </button>
    </main>
  );
};

export default App;
