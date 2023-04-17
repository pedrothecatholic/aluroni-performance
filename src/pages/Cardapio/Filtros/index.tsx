import { memo } from 'react';
import classNames from 'classnames';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import type { FC } from 'react';
import type React from 'react';

type IOpcao = (typeof filtros)[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros: FC<Props> = ({ filtro, setFiltro }: Props) => {
  const selecionarFiltro = (opcao: IOpcao): void => {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  };

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })}
          onClick={(): void => selecionarFiltro(opcao)}
          type={'button'}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default memo(Filtros);
