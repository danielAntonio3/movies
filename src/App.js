import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
