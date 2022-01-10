import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { mapToRepoObject } from './data/data-utils';

const lista_repositorios = [];

export function App() {
  const [repositorios, setRepositorio] = useState(lista_repositorios);
  const [idSelecionado, setId] = useState(2);
  const [nomeUsuario, setNomeUsuario] = useState('LaciJr');

  useEffect(() => {
    fetchDadosDoUsuario();
  },[])

  const handleNomeUsuario = (valor) => {
    setNomeUsuario(valor);
  }
  
  const handleBuscar = () => {
    fetchDadosDoUsuario();
  }

  const fetchDadosDoUsuario = () => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    .then((resposta) => resposta.json())
    .then((resultado) => {
      const repoResultado = mapToRepoObject(resultado);
      setRepositorio(repoResultado);
    })
  }

  return (
    <section>
      <h1>Meu portfólio Github!</h1>
      <Resumo name={`${nomeUsuario}`} imagem={`https://github.com/${nomeUsuario}.png`}/>
      <input type="text" onChange={event => handleNomeUsuario(event.target.value)} value={nomeUsuario}/>
      <button onClick={handleBuscar}>Buscar</button>
      {
      repositorios.length === 0 ? <p>Nenhum repositório disponível.</p> : (
        repositorios.map((valor) => (
          <Repositorio clickDestaque={() => {setId(valor.id)}} destacar={valor.id === idSelecionado} titulo={`${valor.titulo}`} descricao={`${valor.descricao}`}/>
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
      <container onClick={props.clickDestaque} className={`${styles.container_projeto} ${styles.card} ${props.destacar ? styles.destacar : ''}` }>
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
  clickDestaque: PropTypes.func
}