import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js'
function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' Component={Home}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
