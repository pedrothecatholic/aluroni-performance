/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import TagsPrato from 'components/TagsPrato';
import styles from './Item.module.scss';
import type { FC } from 'react';
import type { Prato } from 'types/Prato';

const Item: FC<Prato> = (props: Prato) => {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={(): void => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img alt={title} src={photo} />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>

        <TagsPrato {...props} />
      </div>
    </div>
  );
};

export default memo(Item);
