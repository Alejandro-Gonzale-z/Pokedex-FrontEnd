import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type/:elemetalType" element={<Home />} /> 
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
