import logo from './logo.svg';
import styles from './App.css';
import './apple-touch-icon.png'
import './patron2.jpg'
import './components/Character.js'
import Character from "./components/Character";

export const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
        <h2>Ukraine</h2>
        
        <div>
            <h2 className={styles.AppLogo} >Patron</h2>
            <img src={"./patron2.jpg"} alt={"patron"}/>
        </div>
        <div>
            <Character/>
        </div>
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
    </div>
  );
}

export default App;
