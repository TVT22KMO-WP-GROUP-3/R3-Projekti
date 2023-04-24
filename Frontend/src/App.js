
import Visual2 from './Visual2/visual2Chart';
import sectorChart from './Visual5/sectorChart'
import DemoData from './Visual5/demoPiechart';
import LoginPage from './frontpage_login_register/loginpage';
import RegisterPage from './frontpage_login_register/registerpage';
import DefaultMenu from './menuviews/defaultmenu';
import ChartView from './menuviews/menuchartview';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FrontPage from './frontpage_login_register/frontpage';



function App() {   // kutsutaan aluksi vain MainMenu, joka ohjaa logiikkaa
  return (
    <BrowserRouter>
    <div>
      <div className='logobar'>
        <Link to ="/login"><div classname="navbutton">Log in</div></Link>
        <Link to ="/register"><div classname="navbutton">Sign in</div></Link>
        <Link to ="/menu"><div classname="navbutton">Show all</div></Link>
        
      </div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={<DefaultMenu />} />
        <Route path="/menu/view" element={<ChartView />} />
        </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;
