import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Clientes from './pages/Clientes';
import Productos from './pages/Productos';
import CrearProducto from './pages/CrearProducto';
import NavbarLayout from './layouts/NavbarLayout';
import NoNavbarLayout from './layouts/NoNavbarLayout';
import { useState } from 'react';

function App() {
  const [clientes, setClientes] = useState([]);

  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas sin Navbar */}
        <Route element={<NoNavbarLayout />}>
          <Route path="/" element={<Login setClientes={setClientes} />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas con Navbar */}
        <Route element={<NavbarLayout />}>
          <Route path="/clientes" element={<Clientes clientes={clientes} />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/crear-producto" element={<CrearProducto />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
