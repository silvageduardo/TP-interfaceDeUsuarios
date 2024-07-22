import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  return (
    <CardGroup>
      <Card  >
        
        <Card.Body id = "Integrantes" >
          <Card.Title >Contacto</Card.Title>
          <ListGroup className="list-group-flush" >
          <ListGroup.Item>Tel. : 011 2066-1958 </ListGroup.Item>
          <ListGroup.Item>Dirección : Tte. Manuel Origone 151, Villa Tesei, Buenos Aires </ListGroup.Item>
          <ListGroup.Item>Horarios : Lunes a Sábados de 9 a 21 hs</ListGroup.Item>
          </ListGroup>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Body id = "Integrantes">
          <Card.Title>Integrantes</Card.Title>
          <Card.Text>
            Silva Gabriel Eduardo
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>Seguinos</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroup.Item><Card.Link href="https://www.facebook.com/UNAHUR" target="_blank">FACEBOOK</Card.Link> </ListGroup.Item>
          <ListGroup.Item><Card.Link href="https://www.instagram.com/unahurlingham/" target="_blank">INSTAGRAM</Card.Link> </ListGroup.Item>
          <ListGroup.Item><Card.Link href="https://x.com/unahurlingham" target="_blank">X</Card.Link> </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default Footer;