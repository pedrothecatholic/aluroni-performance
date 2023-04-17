/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';
import type { Cardapio } from 'types/Prato';
import type { FC } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}
export const Itens: FC<Props> = (props: Props) => {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  useEffect(() => {
    const testaBusca = (title: string): boolean => {
      const regex = new RegExp(busca, 'iu');

      return regex.test(title);
    };

    const testaFiltro = (id: number): boolean => {
      if (filtro !== null) return filtro === id;
      return true;
    };

    const ordenar = (novaLista: Cardapio): Cardapio => {
      switch (ordenador) {
        case 'porcao':
          return novaLista.sort((sortA, sortB) => (sortA.size > sortB.size ? 1 : -1));
        case 'qtd_pessoas':
          return novaLista.sort((sortA, sortB) => (sortA.serving > sortB.serving ? 1 : -1));
        case 'preco':
          return novaLista.sort((sortA, sortB) => (sortA.price > sortB.price ? 1 : -1));
        default:
          return novaLista;
      }
    };

    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );

    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => {
        const elemento = <Item key={item.id} {...item} />;

        return elemento;
      })}
    </div>
  );
};

export default Itens;
