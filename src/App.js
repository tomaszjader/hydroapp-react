import './App.css';

const App =()=> {
  return (
    <main class="main">
      <h1 class="main__header">hydrapp</h1>
      <div class="main__glass">
        <span class="main__value value__js">0</span>
      </div>
      <button class="main__add add__button__js">dodaj szklankę</button>
      <button class="main__subtract subtract__button__js">usuń szklankę</button>
    </main>
  );
}

export default App;
