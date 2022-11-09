import { Link } from 'react-router-dom';
import logo from '../assets/img/Biblioteca.png'
import '../assets/style/header.css'
import Book from '../pages/Book';

function Header() {
  return (
    <header>
        <h1>Formulario Escolar</h1>
        <Link to="/Borrow"><h2>Borrow</h2></Link>
        <Link to="/Borrower"><h2>Borrower</h2></Link>
        <Link to="/Book"><h3>Book</h3></Link>
    </header>
  );
}
export default Header;
