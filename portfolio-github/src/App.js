import './App.css';
import PropTypes from 'prop-types'

export function App() {
  return (
    <div>
      <h1>Olá, portfolio!</h1>
    </div>
  );
}

export function Resumo(props) {
  return (
    <div>
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
    <article>
      <h3>{props.titulo}</h3>
      {props.destacar === true ? <span>Projeto em destaque!!</span> : null}
      <p>{props.descricao}</p>
    </article>
  );
}

Repositorio.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
  destacar: PropTypes.bool,
}