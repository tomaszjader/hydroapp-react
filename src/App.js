import './App.css';
import React, { useState } from "react";

const countValidator =( count ) => count < 0 ? 0 : count;

const Header = () => <h1 className="main__header">hydrapp</h1>;

const Glass = (props) => {
  const { count } = props;
  return (<div className="main__glass">
    <span className="main__value value__js">{count}</span>
  </div>)
}

const App = (props) => {
  const [count, setCount] = useState(0);

  return (
    <main className="main">
      <Header></Header>
      <Glass count={count} ></Glass>
      <button
        className="main__add add__button__js"
        onClick={() => {
          setCount(count + 1);
        }}
      >dodaj szklankę</button>
      <button
        className="main__subtract subtract__button__js"
        onClick={() => {
          setCount(countValidator(count - 1));
        }}
      >
        usuń szklankę
      </button>
    </main>
  );
};

export default App;
