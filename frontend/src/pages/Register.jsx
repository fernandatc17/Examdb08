import { useState } from 'react';
import API from '../api';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form);
      alert('Usuario registrado correctamente');
    } catch {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
          </div>
          <button className="btn btn-success w-100">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
