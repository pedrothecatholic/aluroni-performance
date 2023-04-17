import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import type { FC } from 'react';

const PaginaPadrao: FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.header__text}>A casa do código e da massa</div>
    </header>

    <div className={stylesTema.container}>
      <Outlet />
    </div>
  </>
);

export default PaginaPadrao;
