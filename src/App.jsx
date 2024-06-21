import axios  from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
     
      
      ))}
        </div>
    </>
  );
  }


export default App
