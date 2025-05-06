import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      alert('Login incorrecto');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
          </div>
          <button className="btn btn-primary w-100">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
