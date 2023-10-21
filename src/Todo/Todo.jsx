import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Todo() {

    const listaLocalStorage = localStorage.getItem("Lista");
    const [atividade ,setAtividade] = useState("");
    const [lista , setLista] = useState([]);
    const [id , setId] = useState(Math.floor(Math.random(0,100)));
    const [preco , setPreco] = useState(0);

    useEffect(() => {
      const listaLocalStorageJson = JSON.parse(listaLocalStorage);
      setLista(listaLocalStorageJson);
    }, [listaLocalStorage]);

    const salvar = (e) => {
        e.preventDefault();
        if(atividade == "" || preco == '') return;
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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><Link to="/">HOME</Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Mundo ADD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mulheres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Homens</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Infantil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Esportes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Novidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acessórios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coleções</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Puma</a></li>
                <li><a class="dropdown-item" href="#">Nike</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Adidas</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Outlet</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Procurar</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="card">
      <img src="https://br.puma.com/media/contentmanager/content/23AW_Ecom_TS_Football_Instituto-Neymar_Full-Bleed-Hero_Large_Desk_1440x500px_Future-Neymar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">A CHUTEIRA DO NEYMAR JR</h5>
        <p class="card-text">A chuteira do recorde de 78 gols.</p>
        <a href="#" class="btn btn-primary">Ver coleção</a>
      </div>
    </div>

    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <div class="card">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/658504/01/mod01/fnd/BRA/w/640/h/640/fmt/png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">CAMISETA NEYMAR JR FOOTBALL JUVENIL</h5>
              <p class="card-text">R$199,90</p>
              <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/658751/01/mod01/fnd/BRA/w/640/h/640/fmt/png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">CAMISA NEYMAR JR FOOTBALL JUVENIL</h5>
              <p class="card-text">R$179,90</p>
              <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/658505/01/mod01/fnd/BRA/w/640/h/640/fmt/png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">JAQUETA NEYMAR JR FOOTBALL </h5>
              <p class="card-text">R$579,90</p>
              <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <img src="https://br.puma.com/media/contentmanager/content/23AW_Ecom_MF_SP_Fenty-Avanti_Rihanna_FullBleedHero_Desktop_1440x350_1_2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body" />
        <h5 class="card-title">FENTY X PUMA</h5>
        <p class="card-text">FENTY x PUMA apresenta o Avanti, usado por lendas e renascido por Rihanna. Esta silhueta clássica foi retirada dos arquivos da PUMA e reimaginada por Rihanna através da sua própria linguagem de design pessoal e tratamento criativo. Este novo ícone da moda esportiva apresenta uma parte superior em couro premium e uma sola de borracha, e aparece em duas versões personalizadas: clássico preto e branco e totalmente cromado prateado.</p>
        <a href="#" class="btn btn-primary">Ver coleção</a>
      </div>
  
        
        <h2>Add</h2>
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
        <div class="row row-cols-4 mx-5" >
        
          {lista.map((atividade)=> ( 
            <div class="col">
            <div class="card" key={atividade.id}>
            <div class="card-body" />
              <h5 class="card-title">{atividade.atividade}</h5>
              <p class="card-text">{atividade.preco}</p>
              <button onClick={(e) => e.preventDefault(remover(atividade.id))}>Remover</button>
              
            </div>
            </div>
              ))}
        
            </div>
            </div>
            );
          }
