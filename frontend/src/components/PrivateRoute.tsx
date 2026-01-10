import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// Definimos que esse componente aceita um "filho" (a página que queremos proteger)
export function PrivateRoute({ children }: { children: ReactNode }) {
  // 1. Buscamos a informação se o usuário está logado
  const { isAuthenticated, loading } = useContext(AuthContext);

  // 2. Se o AuthContext ainda estiver verificando o token no localStorage, 
  // mostramos um "Carregando..." para não chutar o usuário antes da hora.
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  }

  // 3. Se terminou de carregar e NÃO está autenticado, manda pro Login
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // 4. Se está autenticado, libera o acesso à página filha (Dashboard)
  return children;
}