import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-4 mt-4">📖Dictionary App</h1>
        <Dictionary />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/g-galbiati/">Giorgia Galbiati</a>{" "}
          and is{" "}
          <a href="https://github.com/giorgiag21/dictionary-app">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://lucid-allen-f1a136.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
