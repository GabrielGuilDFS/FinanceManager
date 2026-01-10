import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Dashboard() {
    const {logout} = useContext(AuthContext);
    
    return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">Dashboard Financeiro</h1>
      
      <div className="rounded-lg bg-white p-6 shadow-md flex flex-col items-center">
        <p className="mb-4 text-gray-600">
          Bem-vindo ao sistema seguro! Você está logado.
        </p>
        
        <button
          onClick={logout}
          className="rounded bg-red-500 px-20 py-2 font-bold text-white hover:bg-red-600"
        >
          Sair do Sistema
        </button>
      </div>
    </div>
  );
}