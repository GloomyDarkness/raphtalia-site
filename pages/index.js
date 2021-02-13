import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Página inicial</h1>
            
            <Contador />
        </div>
        )

}

function Contador() {
    const [contador, setContador] = useState(1);

    function AdicionarContador() {
        setContador(contador + 1);
    }

    return (
    <div>
        <div>{Contador}</div>
        <button onClick={AdicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home