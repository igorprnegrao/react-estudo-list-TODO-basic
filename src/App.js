import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    
  ]);

  const [input, setInput] = useState("");

  function handleAllDel() {
    setTarefas([]);
  }

  function handleAdd() {
    if (input === "") return;
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="button" onClick={handleAdd}>
        Adcionar
      </button>
      <button type="button" onClick={handleAllDel}>
        Apagar tudo
      </button>
    </div>
  );
}

export default App;
