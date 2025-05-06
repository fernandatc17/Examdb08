import { useEffect, useState } from 'react';
import API from '../api';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: '', descripcion: '', precio: '' });

  const listar = async () => {
    const res = await API.get('/productos');
    setProductos(res.data);
  };

  const crear = async (e) => {
    e.preventDefault();
    await API.post('/productos', nuevo);
    listar();
  };

  useEffect(() => { listar(); }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mb-4">
        <h2 className="mb-4">Registrar Producto</h2>
        <form onSubmit={crear}>
          <div className="mb-3">
            <input className="form-control" placeholder="Nombre" onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} />
          </div>
          <div className="mb-3">
            <input className="form-control" placeholder="Descripción" onChange={e => setNuevo({ ...nuevo, descripcion: e.target.value })} />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="Precio" onChange={e => setNuevo({ ...nuevo, precio: parseFloat(e.target.value) })} />
          </div>
          <button className="btn btn-success w-100">Crear Producto</button>
        </form>
      </div>

      <div className="card p-4 shadow">
        <h3>Lista de Productos</h3>
        <ul className="list-group mt-3">
          {productos.map(p => (
            <li key={p.id} className="list-group-item">
              {p.nombre} - S/ {p.precio}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Productos;
