import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';


function Select() {
    
    const [filter, setFilter] = useState(''); //Estado para guardar el filtro seleccionado
    const [characters, setCharacters] = useState ([]) //Estado para guardar los personajes obtenidos



    //Funcion para manejar el cambio en el select
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setFilter(selectedValue);
        fetchCharacters(selectedValue); // Llamada a la API cuando cambia el select
    };
    
      // Función para hacer la llamada a la API
  const fetchCharacters = (species) => {
    fetch(`https://rickandmortyapi.com/api/character/?species=${species}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results); // Aquí puedes manejar los resultados de la API
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
    };
    

    
    
    
    return (
        <div  className='d-flex justify-content-center align-items-center py-2'> 
            <div className='p-2' style={{ width: '200px' }}>
            <Form.Select aria-label="Default select example" onChange={handleSelectChange} >
                <option>Species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                
            </Form.Select>
            </div> 
            {/*Mostrar los personajes obtenidos */}
            <div className='d-flex flex-wrap justify-content-center mt-4'>
                {characters.map((character) => (
                    <Card key={character.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={character.image} alt='{character.name' />
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                Especie: {character.species} <br />
                                Estado: {character.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}

            </div>
            
        </div>
     
    );
  }
  
  export default Select;
