import './App.css';
import Login from "./Login"
import BigSquare from "./BigSquare"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
    <Routes>
      <Route exact path='/main' element={<BigSquare/>} />
      <Route exact path='/' element={<Login/>} />
    </Routes>
    </header>
    </div>
    </Router>
  );
}

export default App;
