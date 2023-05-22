import Button from "./components/Buttons/Button";
import Icon from "./components/icons/Icon";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          data-testid="app-link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Icon name="Badge" color="B300" />
        <Button iconLeft="Bottom" iconRight="Bottom" />
      </header>
    </div>
  );
}

export default App;
