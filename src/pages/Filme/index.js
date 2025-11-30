import './filme.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Notification from '../../components/Notification'

function Filme (){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState(null);

    useEffect(() => {

        async function loadFilme() {
            await api.get(`/movie/${id}`)
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("Filme não encontrado");
                    navigate("/", {
                        replace: true,
                        state: { popup: "Filme não encontrado!" }
                    });

                setLoading(false);
            });
        }

        loadFilme();

        return () => {
            console.log("Componente desmontado!");
        };

    }, [navigate,id]);
    

    function SalvarFilme() {
        const minhaLista = localStorage.getItem("@primeFlix");

        let FilmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = FilmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id )

        if ( hasFilme ) {
            setNotification({ message: "Esse filme já está na lista!", type: "error" });
            return;
        } 

        FilmesSalvos.push(filme);

        localStorage.setItem("@primeFlix", JSON.stringify(FilmesSalvos));
        setNotification({ message: "Filme salvo com sucesso!", type: "success" });
    }

    if(loading) {
        return(
            <div className="loading-container">
                <div className="loading-content">
                    <div className="spinner"></div>
                    <h2>Carregando filme...</h2>
                    <p>Aguarde um momento</p>
                </div>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt='filme.title' />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className='area-buttons'>
                <button onClick={SalvarFilme} >Salvar </button>
                <button>
                    <a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Ver trailer</a>
                </button>
            </div>
            
            {notification && (
                <Notification 
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
        </div>
    )
}

export default Filme;
