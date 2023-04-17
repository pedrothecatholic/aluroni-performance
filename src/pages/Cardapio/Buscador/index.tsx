import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';
import styles from './Buscador.module.scss';
import type { FC } from 'react';
import type React from 'react';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: FC<Props> = ({ busca, setBusca }: Props) => {
  const elemento = useMemo(() => <CgSearch color={'#4C4D5E'} size={20} />, []);

  return (
    <div className={styles.buscador}>
      <input
        onChange={(evento): void => setBusca(evento.target.value)}
        placeholder={'Buscar'}
        value={busca}
      />

      {elemento}
    </div>
  );
};

export default memo(Buscador);
