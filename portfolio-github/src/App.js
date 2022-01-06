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

export function Repositorio() {
  return (
    <article>
      <h3>GitHub</h3>
      <span>Projeto em destaque!!</span>
      <p>Projeto 1</p>
    </article>
  );
}