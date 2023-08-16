import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Object3DView from './views/Object3DView';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<Object3DView />} />
      </Routes>
    </Router>
  );
};

export default App;
