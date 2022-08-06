import './App.css';
import Dictionary from "./Dictionary";
import logo from "./images/small-logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="logo img-fluid" alt="logo" />
        Dictionary
      </header>
      <Dictionary defaultKeyword="sun" />
      </div>
      <div className="text-center">Coded by Anca Todea
      <br />
       <a href="https://github.com/ancatodea/dictionary-project">
        Check the open-source code on github
       </a>
      </div>
    </div>
  );
}

export default App;
