import "./App.css";
import Logo from "./components/Logo";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <nav>
        <Logo />
        <div>
          <h1>Zitrous</h1>
          <p>An all-in-one code to styled image converter.</p>
        </div>
      </nav>
      <Main />
      <footer>Designed and Created By Joseph Fantuzzi</footer>
    </div>
  );
}

export default App;
