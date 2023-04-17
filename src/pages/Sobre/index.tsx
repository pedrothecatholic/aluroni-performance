import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';
import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import type { FC } from 'react';

const imagens = [massa1, massa2];

export const Sobre: FC = () => (
  <section>
    <h3 className={stylesTema.titulo}> Sobre </h3>

    <div className={styles.sobreNos}>
      <img alt={'Casa Aluroni'} src={casa} />

      <div className={styles.sobreNos__texto}>
        <p>
          Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais
          saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária
          Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais
          intensa!
        </p>

        <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>

        <p>
          Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que
          harmonizam perfeitamente com o seu parto, seja carne ou massa!
        </p>
      </div>
    </div>

    <div className={styles.imagens}>
      {imagens.map((imagem) => (
        <div key={imagem} className={styles.imagens__imagem}>
          <img alt={'imagem de massa'} src={imagem} />
        </div>
      ))}
    </div>
  </section>
);

export default Sobre;
