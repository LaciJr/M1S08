import './App.css';

export function App() {
  return (
    <div>
      <h1>Olá, portfolio!</h1>
    </div>
  );
}

export function Resumo() {
  return (
    <div>
      <h1>GitHub Profile</h1>
      <img src='https://github.com/LaciJr.png' alt='github LaciJr'></img>
    </div>
  );
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