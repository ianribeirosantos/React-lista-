import { useState, useEffect } from 'react';

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resposta = await fetch('http://localhost:3000/api/filmes');
      const dados = await resposta.json();
      setItens(dados);
    }
    carregar();
  }, []);

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;