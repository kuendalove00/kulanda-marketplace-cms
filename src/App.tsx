import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import AddLoja from './pages/Loja/Cadastrar/Cadastrar';
import ListLoja from './pages/Loja/Listar/Listar';
import AddCategoria from './pages/Categoria/Cadastrar/Cadastrar';
import ListCategoria from './pages/Categoria/Listar/Listar';
import AddSubcategoria from './pages/Subcategoria/Cadastrar/Cadastrar';
import ListSubcategoria from './pages/Subcategoria/Listar/Listar';
import AddMarca from './pages/Marca/Cadastrar/Cadastrar';
import ListMarca from './pages/Marca/Listar/Listar';
import AddModelo from './pages/Modelo/Cadastrar/Cadastrar';
import ListModelo from './pages/Modelo/Listar/Listar';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | Kulanda" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Contas | Kulanda" />
              <Profile />
            </>
          }
        />
        <Route
          path="/lojas/cadastrar"
          element={
            <>
              <PageTitle title="Lojas | Kulanda" />
              <AddLoja />
            </>
          }
        />
        <Route
          path="/lojas/listar"
          element={
            <>
              <PageTitle title="Lojas | Kulanda" />
              <ListLoja />
            </>
          }
        />
        <Route
          path="/categorias/cadastrar"
          element={
            <>
              <PageTitle title="Categorias | Kulanda" />
              <AddCategoria />
            </>
          }
        />
        <Route
          path="/categorias/listar"
          element={
            <>
              <PageTitle title="Categorias | Kulanda" />
              <ListCategoria />
            </>
          }
        />
        <Route
          path="/subcategorias/cadastrar"
          element={
            <>
              <PageTitle title="Subcategorias | Kulanda" />
              <AddSubcategoria />
            </>
          }
        />
        <Route
          path="/subcategorias/listar"
          element={
            <>
              <PageTitle title="Subcategorias | Kulanda" />
              <ListSubcategoria />
            </>
          }
        />
        <Route
          path="/marcas/cadastrar"
          element={
            <>
              <PageTitle title="Marca | Kulanda" />
              <AddMarca />
            </>
          }
        />
        <Route
          path="/marcas/listar"
          element={
            <>
              <PageTitle title="Marca | Kulanda" />
              <ListMarca />
            </>
          }
        />
        <Route
          path="/modelos/cadastrar"
          element={
            <>
              <PageTitle title="Modelo | Kulanda" />
              <AddModelo />
            </>
          }
        />
        <Route
          path="/modelos/listar"
          element={
            <>
              <PageTitle title="Modelo | Kulanda" />
              <ListModelo />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Definições | Kulanda" />
              <Settings />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Login | Kulanda" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/registo"
          element={
            <>
              <PageTitle title="Registo | Kulanda" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
