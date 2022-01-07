import PropTypes from 'prop-types';
import styles from './App.module.css';

const lista_repositorios = [];
  lista_repositorios[1] = {id: 1, titulo: "Título do primeiro item", descricao: "Descrição do primeiro item"};
  lista_repositorios[2] = {id: 2, titulo: "Título do segundo item", descricao: "Descrição do segundo item"};
  lista_repositorios[3] = {id: 3, titulo: "Título do terceiro item", descricao: "Descrição do terceiro item"};
  lista_repositorios[4] = {id: 4, titulo: "Título do quarto item", descricao: "Descrição do quarto item"};
  lista_repositorios[5] = {id: 5, titulo: "Título do quinto item", descricao: "Descrição do quinto item"};

export function App() {
  return (
    <section>
      <h1>Meu portfólio Github!</h1>
      <Resumo name='Laci Jr' imagem='https://github.com/LaciJr.png'/>
      {
      lista_repositorios.length === 0 ? <p>Nenhum repositório disponível.</p> : (
        lista_repositorios.map((valor) => (
          <Repositorio destacar={valor.id === 1 ? true : false} titulo={`${valor.titulo}`} descricao={`${valor.descricao}`}/>
        ))
      )
      }
    </section>
  );
}

function Resumo(props) {
  return (
    <div className={styles.card}>
      <h1>{props.name} profile</h1>
      <img src={props.imagem} alt={props.name}></img>
    </div>
  );
}

Resumo.propTypes = {
  name: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
}

function Repositorio(props) {

  return (
      <container className={`${styles.container_projeto} ${styles.card} ${props.destacar ? styles.destacar : ''}` }>
      <div  className={styles.projeto_info}>
      <h3 className={styles.projeto_titulo}>{props.titulo}</h3>
      {props.destacar === true ? <span>Em destaque!!</span> : null}
      </div>
      <div  className={styles.projeto_info}>
      <p>{props.descricao}</p>
      </div>
      </container>
  );
}

Repositorio.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  destacar: PropTypes.bool,
}