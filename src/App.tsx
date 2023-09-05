import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';
import "./App.css";
import Mobile from "./Pages/Mobile/Mobile";

const App = () => {
  const isMobile = window.innerWidth < 1000;

  return (
    <Router>
      <Routes>
        {isMobile ? (
          <Route path="/" element={<Mobile />} />
        ) : (
          <>
        <Route path="/" element={<Home />} />
        <Route path="/type/:elemetalType" element={<Home />} /> 
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </>
        ) }
      </Routes>
    </Router>
  );
}

export default App;
