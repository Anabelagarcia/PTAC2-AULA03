import { useState } from "react";

import { Link } from "react-router-dom";

export default function Todo() {

    const [atividade ,setAtividade] = useState("");
    const [lista , setLista] = useState([]);
    const [id , setId] = useState(Math.floor(Math.random(0,100)));
    const [preco , setPreco] = useState(0);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id:id,
            preco:preco

        }]);

        setId(id+1);
        setAtividade("");
        setPreco("");
    };

    function remover (id) {
      const auxiliarlista = [...lista]
      const newlista = auxiliarlista.filter((e =>( e.id != id ? lista : null)));
         console.log(newlista);
         setLista(newlista);

    };

    return (
     <div>
        <Link to="/">HOME</Link>
        <h1>ADD</h1>
        
        <form onSubmit={salvar}>
            <input
              type="text"
              value={atividade}
              onChange={(e) => { setAtividade (e.target.value);
            }}/>
            <input
              type="number"
              value={preco}
              onChange={(e) => { setPreco (e.target.value);
            }}/>



        <button>ADD</button>
        </form>
        {lista.map((atividade)=> ( <div key={atividade.id0}>
            <p>{atividade.atividade}</p>
            <p>{atividade.preco}</p>
            <button onClick={(e)=> e.preventDefault(remover(atividade.id))}>remover</button>
            </div>
            ))}
            </div>

            
        );
    }
