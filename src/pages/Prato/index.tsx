/* eslint-disable react/jsx-props-no-spreading */
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { lazy } from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Prato.module.scss';
import type { FC } from 'react';

const TagsPrato = lazy(() => import('components/TagsPrato'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export const Prato: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = -1;
  const prato = cardapio.find((item) => item.id === Number(id));

  if (!prato) return <NotFound />;

  return (
    <Routes>
      <Route element={<PaginaPadrao />} path={'*'}>
        <Route
          element={
            <>
              <button
                className={styles.voltar}
                onClick={(): void => navigate(goBack)}
                type={'button'}
              >
                {'< Voltar'}
              </button>

              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>

                <div className={styles.imagem}>
                  <img alt={prato.title} src={prato.photo} />
                </div>

                <div className={styles.conteudo}>
                  <p className={styles.conteudo__descricao}>{prato.description}</p>
                  <TagsPrato {...prato} />
                </div>
              </section>
            </>
          }
          index
        />
      </Route>
    </Routes>
  );
};

export default Prato;
