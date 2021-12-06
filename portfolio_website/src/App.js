import logo from './logo.svg';
import './App.css';

//Steps to change
//1. push project to repo
//2. npm run deploy
//3. go to https://github.com/coleman399/PortfolioWebsite_REPO/settings/pages
// and update the custom url to dillonthedev.com and save
//4. close out of all internet browsers and run ccleaner
//5. check chrome and internet explorer if dillonthedev.com changes have occurred 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Final Test
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
