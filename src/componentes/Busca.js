
const Busca = ({busca, setBusca}) => {
  return <div className="busca">

    <h2>Pesquisar</h2>

    <input
     type= "text"
     value={busca} onChange = {(e)=> setBusca(e.target.value)}
     placeholder="Digite aqui para pesquisar uma tarefa"/>  
    </div>
  
}

export default Busca