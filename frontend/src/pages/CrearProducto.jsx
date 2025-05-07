import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function CrearProducto() {
  const [producto, setProducto] = useState({ nombre: '', descripcion: '', precio: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/productos', producto);
    alert('Producto creado');
    navigate('/productos');
  };

  return (
    <div className="container mt-5">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Descripción"
            onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            step="0.01"
            placeholder="Precio"
            onChange={(e) => setProducto({ ...producto, precio: parseFloat(e.target.value) })}
            required
          />
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default CrearProducto;
