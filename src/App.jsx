import { Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import DogInfo from './components/DogInfo';
import Welcome from './components/Welcome';
import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";

function App() {
  const [dog, setDog] = useState(null);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/catalog" element={<Catalog setDog={setDog} />} />
        <Route path="/doginfo" element={<DogInfo dog={dog} />} />
      </Routes>
    </div>
  );
}

export default App;
