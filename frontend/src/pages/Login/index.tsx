import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"; 
import { AuthContext } from "../../contexts/AuthContext";
import {toast} from 'react-toastify';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); 
    setLoading(true);

    try {
      const response = await api.post("/Auth/Login", { 
        email, 
        password 
      });
      
      const token = response.data.token;

      login(token);
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Erro no login:", error);
      toast.warning("Falha no login! Verifique seu email e senha.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Finance Manager</h1>
          <p className="text-gray-500">Faça login para controlar suas contas</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md py-2 font-bold text-white transition duration-200 
              ${loading ? "cursor-not-allowed bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Ainda não tem conta? <Link to="/Register" className="cursor-pointer text-blue-600 hover:underline">Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
}