import { Link } from 'react-router-dom';

function Clientes({ clientes }) {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Clientes Registrados</h2>
        <ul className="list-group mb-3">
          {clientes.map(cli => (
            <li key={cli.id} className="list-group-item">
              {cli.username}
            </li>
          ))}
        </ul>
        <Link to="/productos" className="btn btn-info">Ir a Productos</Link>
      </div>
    </div>
  );
}

export default Clientes;
