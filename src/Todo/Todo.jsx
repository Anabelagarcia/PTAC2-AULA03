import { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo(){
    const [count ,setCount, ] = useState(0);
    return (
     <div>
        <h1>todo</h1>
        <Link to="/home"> HOME </Link>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>count</button>
        <button onClick={() => setCount(0)}>zero</button>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
     </div>
     
    );


}