import {Link} from 'react-router-dom'
import './error.css'

function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-icon">404</div>
                <h1>Página não encontrada</h1>
                <p>A página que você está procurando não existe ou foi movida.</p>
                <Link to='/' className="back-button">Voltar ao início</Link>
            </div>
        </div>
    )
}

export default ErrorPage;