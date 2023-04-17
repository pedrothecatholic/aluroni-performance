import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Footer.module.scss';
import type { FC } from 'react';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <Logo />
  </footer>
);

export default Footer;
