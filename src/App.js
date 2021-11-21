import './App.css';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <header>
          <h1 className="heading">Movie Generator</h1>
          <h3>Let us randomly decide which movie you should watch next !</h3>
        </header>
        <div>
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;
