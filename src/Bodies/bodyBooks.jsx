
import Listado from '../Data/Data.jsx';
import '../assets/style/bodyBooks.css'
function BodyBooks() {
    return (  
        <div>
            <h1>Los libros disponibles son:</h1>
            <div>
            <Listado></Listado>
            </div>
        </div>
     );
}

export default BodyBooks;