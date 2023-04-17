import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { memo, useState } from 'react';
import classNames from 'classnames';
import opcoes from './opcoes.json';
import styles from './Ordenador.module.scss';
import type { FC } from 'react';
import type React from 'react';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador: FC<Props> = ({ ordenador, setOrdenador }: Props) => {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ''
      })}
      onBlur={(): void => setAberto(false)}
      onClick={(): void => setAberto(!aberto)}
      type={'button'}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}

      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto
        })}
      >
        {opcoes.map((opcao) => (
          <div
            key={opcao.value}
            className={styles.ordenador__option}
            onClick={(): void => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
};

export default memo(Ordenador);
