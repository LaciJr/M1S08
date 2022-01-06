import PropTypes from 'prop-types'
import styles from './App.module.css';
export function Resumo(props) {
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
export function Repositorio(props) {

  return (
    <div className={styles.card}>
      <h2>Meu portfólio Github!</h2>
      <container className={styles.container_projetoTitulo}>
      <h3 className={styles.projeto_info}>Projeto 1</h3>
      <p className={styles.projeto_info}>Descrição do Projeto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </container>
      <br></br>
      {props.destacar === true ? <span>Projeto em destaque!!</span> : null}
    </div>
  );
}

Repositorio.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  destacar: PropTypes.bool,
}