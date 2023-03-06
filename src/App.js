import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Display from "./components/Display";
import Create from "./components/Create";
import Status from "./components/Status";
import Status2 from "./components/Status2"
import Status3 from "./components/Status3";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h2><button><Link to={'/'}>Manage Players</Link></button> | <button><Link to={'/status'}>Manage Player Status</Link></button></h2>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path='/status' element={<Status/>}/>
        <Route path='/status2' element={<Status2/>}/>
        <Route path='/status3' element={<Status3/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
