import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import type { FC } from 'react';

const Menu: FC = () => {
  const rotas = [
    {
      label: 'Início',
      to: '/'
    },
    {
      label: 'Cardápio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }
  ];

  return (
    <nav className={styles.menu}>
      <Logo />

      <ul className={styles.menu__list}>
        {rotas.map((rota) => (
          <li key={rota.label} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
