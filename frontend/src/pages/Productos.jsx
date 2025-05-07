import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [productosOriginal, setProductosOriginal] = useState([]);
  const [filtro, setFiltro] = useState('');

  const listar = async () => {
    const res = await API.get('/productos');
    setProductos(res.data);
    setProductosOriginal(res.data);
  };

  useEffect(() => { listar(); }, []);

  const filtrar = (texto) => {
    const filtrados = productosOriginal.filter(p =>
      p.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setProductos(filtrados);
    setFiltro(texto);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Productos</h2>
        <Link to="/crear-producto" className="btn btn-success">Crear Producto</Link>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar producto por nombre"
        value={filtro}
        onChange={(e) => filtrar(e.target.value)}
      />
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.descripcion}</td>
              <td>S/ {p.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;
