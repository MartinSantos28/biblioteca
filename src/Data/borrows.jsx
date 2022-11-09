const Borrows = [
    {
        id: 1,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022"
    },
    {
        id: 2,
        borrower: "Josue Galdamez",
        book: "Crepusculo",
        dateOfRent: "20/07/2022",
        dateOfDevolution: "24/07/2022"
    },
    {
        id: 3,
        borrower: "Juan Carmona",
        book: "Eternos",
        dateOfRent: "27/05/2022",
        dateOfDevolution: "1/06/2022"
    },
    {
        id: 4,
        borrower: "Martin Santos",
        book: "Hush hush",
        dateOfRent: "22/08/2022",
        dateOfDevolution: "26/08/2022"
    }
]

function Listado() {
    return ( 
        <div>
        {Borrows.map((value, index )=>{
          return (
              <div className="contenido" key={index}> 
                  <p>{value.borrower}</p>
                  <p>{value.book}</p>
                  <p>{value.dateOfRent}</p>
                  <p>{value.dateOfDevolution}</p>
              </div>
          )
        }
        )}
      </div>
     );
}

export default Listado;