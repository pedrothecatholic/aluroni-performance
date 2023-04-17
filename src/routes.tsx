import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import type { FC } from 'react';

const Cardapio = lazy(() => import('pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export const AppRouter: FC = () => (
  <main className={'container'}>
    <Router>
      <Menu />

      <Suspense fallback={<p> Carregando... </p>}>
        <Routes>
          <Route element={<PaginaPadrao />} path={'/'}>
            <Route element={<Inicio />} index />
            <Route element={<Cardapio />} path={'cardapio'} />
            <Route element={<Sobre />} path={'sobre'} />
          </Route>

          <Route element={<Prato />} path={'prato/:id/*'} />
          <Route element={<NotFound />} path={'*'} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  </main>
);

export default AppRouter;
