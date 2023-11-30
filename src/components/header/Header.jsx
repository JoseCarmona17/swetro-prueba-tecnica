import { Link } from 'react-router-dom';
import './header.css'

export const Header = () => {
  return (
    <header className="header">
        <a href="#" className="logo">
          Swetro
        </a>

        <nav className="navbar">
        <Link to="/">Inicio</Link>
        <a href='#'>Servicios</a>
        <Link to="/registros">Registros</Link>
        <Link to="/admin">Graficas</Link>
      </nav>
    </header>
  )
}
