import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Registro exitoso. Inicia sesión.');
      navigate('/');
    } catch {
      alert('Error al registrar');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Elige un nombre de usuario"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Crea una contraseña"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-success w-100">Registrarme</button>
        </form>
        <div className="mt-3 text-center">
          <span>¿Ya tienes una cuenta? </span>
          <Link to="/" className="text-decoration-none">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
