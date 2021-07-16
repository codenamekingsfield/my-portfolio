import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Contacts from './components/Contacts/Contacts';
import './App.scss'

function App() {
  return (
    <div className="app">
     <Navbar/>
      <div className="sections">
        
      <Intro/>
      <Portfolio/>
      <Project/>
      <Contacts/>
      </div>
    </div>
  );
}

export default App;
