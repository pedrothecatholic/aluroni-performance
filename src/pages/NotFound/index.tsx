import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import type { FC } from 'react';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  const goBack = -1;

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true
      })}
    >
      <div className={styles.voltar}>
        <button onClick={(): void => navigate(goBack)} type={'button'}>
          {'< Voltar'}
        </button>
      </div>

      <NotFoundImage />
    </div>
  );
};

export default NotFound;
