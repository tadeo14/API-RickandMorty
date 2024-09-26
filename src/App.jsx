import axios  from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {
  const [personajes, setPersonajes] = useState([]);
  const conectarApi = async () => {
    
      try {
        const respuesta = await  axios.get('https://rickandmortyapi.com/api/character');
        setPersonajes(respuesta.data.results);
      } catch (error) {

        console.log(error);
      }
     
  };
  conectarApi();
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap m-5">
      {personajes.map((personaje) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={personaje.image} />
          <Card.Body>
            <Card.Title>{personaje.name}</Card.Title>
            <ListGroup.Item>{personaje.species}</ListGroup.Item>
            <ListGroup.Item>{personaje.status}</ListGroup.Item>
          </Card.Body>
        </Card>
     
      
      ))}
        </div>
    </>
  );
  }


export default App
