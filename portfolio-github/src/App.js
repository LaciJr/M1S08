import './App.css';

function App() {
  const lista_repositorios = [];
  lista_repositorios[1] = {id: 1, titulo: "Título do primeiro item", descricao: "Descrição do primeiro item"}
  lista_repositorios[2] = {id: 2, titulo: "Título do segundo item", descricao: "Descrição do segundo item"}
  lista_repositorios[3] = {id: 3, titulo: "Título do terceiro item", descricao: "Descrição do terceiro item"}
  lista_repositorios[4] = {id: 4, titulo: "Título do quarto item", descricao: "Descrição do quarto item"}
  lista_repositorios[5] = {id: 5, titulo: "Título do quinto item", descricao: "Descrição do quinto item"}
  return (
    <div>
      <h1>Olá, portfolio!</h1>
      {
      lista_repositorios.length === 0 ? <p>Nenhum repositório disponível.</p> : (
        lista_repositorios.map((valor) => (
          <p key={valor.id}>{valor.id} - {valor.titulo} - {valor.descricao}</p>
        ))
      )
      }
    </div>
  );
}

export default App;