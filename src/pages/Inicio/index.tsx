/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import nossaCasa from 'assets/nossa_casa.png';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import type { FC } from 'react';
import type { Prato } from 'types/Prato';

export const Inicio: FC = () => {
  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  const redirecionarParaDetalhes = (prato: Prato): void => {
    navigate(`/prato/${prato.id}`, { replace: true, state: { prato } });
  };

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>

      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img alt={item.title} src={item.photo} />
            </div>

            <button
              className={styles.recomendado__botao}
              onClick={(): void => redirecionarParaDetalhes(item)}
              type={'button'}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTema.titulo}> Nossa casa </h3>

      <div className={styles.nossaCasa}>
        <img alt={'Casa do aluroni'} src={nossaCasa} />

        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Inicio;
