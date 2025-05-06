import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Productos from './pages/Productos';
import { useState } from 'react';

function App() {
  const [clientes, setClientes] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setClientes={setClientes} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/clientes" element={<Clientes clientes={clientes} />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
