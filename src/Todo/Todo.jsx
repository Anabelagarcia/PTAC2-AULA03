import { useState } from "react";

import { Link } from "react-router-dom";

export default function ToDo() {

    const [atividade ,setAtividade] = useState("");
    const [lista , setLista] = useState([]);
    const [id , setId] = useState(Math.floor(Math.randoom(0,100)));

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade
        id:id
        }]);
    };

    function remover (id) {
      const auxiliarlista = [...lista]
      const newlista = auxiliarlista.filter((e =>( e.id != id ? lista : null)));
         console.log(newlista);
         setLista(newlista);

    };

    return (
     <div>
        <h1>todo</h1>
        <Link to="/">HOME</Link>
        <form onSubmit={salvar}>
            <input
              type="text"
              value={atividade}
              onChange={(e) => { setAtividade (e.target.value);
            }}/>

        <button>ADD</button>
        </form>
        {lista.map((atividade)=> ( <div key={atividade.id0}>
            <p>{atividade.atividade}</p>
            <button onClick={(e)=> e.preventDefault(remover(atividade.id))}>remover</button>
            </div>
            ))}
            </div>
        );
    }
