import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Livro from "./pages/Livro/Livro";
import Erro from './pages/Erro/Erro';
import Tabs from '../src/components/Tabs/Tabs';
import Login from '../src/pages/Login/login';
import Cadastro from '../src/pages/Cadastro/cadastro';
import { AuthProvider, AuthContext } from "./contexts/auth";
import React, { useContext } from "react";


 // Função para privar rotas (recebe children do contexto)
 const Private = ({children}) => {
    // Resgata authenticated e carregando do contexto
    const { authenticated, carregando } = useContext(AuthContext);

    // Verifica se as informações estão prontas para serem exibidas e se o usuario esta autenticado
    if(carregando) {
        return(<div className="carregando"><h2>Carregando....</h2></div>);
    }
    if(!authenticated) {
        return(
            <Navigate to="/login" />
        );
    }    
    return(children);
};

const Rotas = () => {
    return(
        <BrowserRouter>
            <AuthProvider>
                    <Routes>
                        <Route path="/login" element={ <Login/> }/>
                        <Route path="/cadastro" element={ <Cadastro/> }/>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/livro/:livroId" element={ <Private> <Livro/> </Private> }/>
                        <Route path="/*" element={  <Erro/> }></Route>
                        <Route path="/tabs" element={ <Private> <Tabs/> </Private> }></Route>
                    </Routes>
                </AuthProvider>
        </BrowserRouter>
    )
}

export default Rotas;
