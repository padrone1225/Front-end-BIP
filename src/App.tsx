import Button from "./components/Buttons/Button";
import IconButton from "./components/Buttons/IconButton";
import Header from "./components/Header/Header";
import Icon from "./components/icons/Icon";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
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
        <IconButton size="lg" />
      </header>
    </div>
  );
}

export default App;
