import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Todo from './Todo/Todo.jsx'
import Home from './Home/Home.jsx'
import Atividade from './Todo/atividade';
import Detalhe from './Detalhe/detalhe';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path= '/atividade' element= {<Atividade />}></Route>
    <Route path= '/' element= {<Home />}></Route>
    <Route path= '/detalhe/:id' element= {<Detalhe />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
