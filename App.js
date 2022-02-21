
import {BrowserRouter, BrowserRouter as Router, Link} from 'react-router-dom'
import {store} from './store/store'
import { Provider } from 'react-redux';
import FrontPage from './Pages/FrontPage'
import './App.css'
import InteractiveBar from './components/InteractiveBar';
import Navbar from './Pages/Navbar';

function App() {
  return (
    
    <div className="App">
      {/* <BrowserRouter>
     <FrontPage path = "/" />
     </BrowserRouter> */}
     <Navbar />
     <InteractiveBar />
    </div>
  );
}

export default App;
