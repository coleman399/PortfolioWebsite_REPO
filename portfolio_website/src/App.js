import GalaxyLoop from './assests/GalaxyLoop.mov';
import './App.css';

//Steps to change
//1. push project to repo
//2. npm run deploy
//3. go to https://github.com/coleman399/PortfolioWebsite_REPO/settings/pages
//      and update the custom url to dillonthedev.com and save
//4. close out of all internet browsers and run ccleaner
//5. check chrome and internet explorer if dillonthedev.com changes have occurred
//6. Celebrate Success! Good Work!

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: "100%",
          left: "100%",
          right: "100%",
          top: "100%",
          height: "100%",
          object: "cover",
          transform:"translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src={GalaxyLoop} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
