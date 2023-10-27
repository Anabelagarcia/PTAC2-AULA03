import { useEffect } from "react";

export default function Atividade() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage || []);

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id:id,
            atividade: atividade,
        }]);
        setId(id+1);
        setAtividade("");

};