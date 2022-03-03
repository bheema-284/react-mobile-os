import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <h1>Mobile Operating System</h1>
        <div id="lis">
          <li>Andriod</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </div>
      </ul>

      <ul>
        <h1>Mobile Manufactures</h1>
        <div id="liss">
          <ul>
            <div id="lss">
              <ul>
                <li>Samsung</li>
                <li>HTC</li>
              </ul>
            </div>
          </ul>
          <li>Micromax</li>
        </div>
        <ul>
          <li>Apple</li>
        </ul>
      </ul>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



*/