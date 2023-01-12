import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
