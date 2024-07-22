import React, {useEffect,useState} from 'react'
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

function Galeria() {

    const [cafes,setCafes] = useState([])
          useEffect( () => {
              fetch('https://api.sampleapis.com/coffee/hot') //promesa
                  .then(response => response.json()) //me devuelve una promesa convertida en json (crudo)
                  .then(data => setCafes(data) ) //ylo convierte en un obj de js 
          },[]) //(array manipulable)
         
  return (
    <>
    <div><h1>Esta es una galería simple de imagenés traídas mediante Fetch con la API indicada</h1></div>

    <ListGroup >
        {cafes.map(cafe => <ListGroup.Item> {cafe.title} <Image style={{ width: 100, alignItems: 'center', height: 'auto',alignSelf: 'center'  , textAlign: 'center', margin: 'auto',justifyContent: 'center'  }} src={cafe.image}  roundedCircle />  </ListGroup.Item> )}
        </ListGroup>
    </>
    
  )
}
export default Galeria;
