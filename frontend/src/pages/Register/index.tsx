import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"; 
import { toast } from 'react-toastify';

export function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.warning("As senhas não coincidem!");
            return;
        }

        if (password.length < 6){
            toast.warning("A senha deve ser maior que 6 caracteres");
            return;
        }

        setLoading(true);
        try {
            await api.post("/auth/register",{
                name,
                email,
                password,
                confirmPassword
            });
            
            toast.success("Conta criada! Faça o seu login!");
            navigate("/");
        } catch (error: any) {
            console.error(error);
            
            const validationErrors = error.response?.data?.errors;
            if (validationErrors) {
                const errorMessages = Object.values(validationErrors).flat().join("\n");
                toast.error(`Erro: ${errorMessages}`);
            } else {
                toast.error(error.response?.data?.message || "Erro ao criar conta.");
            }
        }finally{
            setLoading(false);
        }
    }
    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Criar Conta</h1>
          <p className="text-gray-500">Comece a gerenciar suas finanças hoje</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              required
              placeholder="Mínimo 6 caracteres"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
           
           <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Confirmar senha</label>
            <input
              type="password"
              required
              placeholder="Mínimo 6 caracteres"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-md py-2 font-bold text-white transition duration-200 
              ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Cadastrando..." : "Criar Minha Conta"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Já tem uma conta? <Link to="/" className="text-blue-600 hover:underline">Faça Login</Link></p>
        </div>
      </div>
    </div>
  );
}