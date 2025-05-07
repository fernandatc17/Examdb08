import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

function Login({ setClientes }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      setClientes(res.data.clientes);
      navigate('/clientes');
    } catch {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre de usuario"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-primary w-100">Ingresar</button>
        </form>
        <div className="mt-3 text-center">
          <span>¿No tienes una cuenta? </span>
          <Link to="/register" className="text-decoration-none">Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
