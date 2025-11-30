import './favoritos.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Favoritos (){ 

    const [filmes, setFilmes] = useState([]);

    useEffect( () => {

        const minhaLista = localStorage.getItem("@primeFlix")

        setFilmes( JSON.parse(minhaLista) || [] )

    }, [] )



    function excluirFilme (id) {
        let filtroFilmes = filmes.filter( (item) => {
             return ( item.id !== id )
        } )

        setFilmes(filtroFilmes)
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
    }

    return(
        <div className="Meus-Filmes">
            <h1>
                Filmes Favoritos
            </h1>

            {filmes.length === 0 && <span className="empty-message">Você ainda não possui nenhum filme salvo...</span>}

            <ul>
                {
                    filmes.map( (item) => {
                        return (
                            <li key={item.id}>
                                <h2>
                                    {item.title}
                                </h2>

                                <div>
                                    <Link to={`/filme/${item.id}`}> Ver detalhes </Link>
                                    <button onClick={ () => excluirFilme(item.id) } className="btn-excluir"> Excluir </button>
                                </div>

                            </li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}

export default Favoritos;