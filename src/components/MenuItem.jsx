import React, {useState,useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


 function MenuItem() {
        const menuItems = [
          { name: 'Café Latte', precio: 450, imagen : '../../public/Café Latte.jpg'},
          { name: 'Cappuccino', precio: 475, imagen : "../../public/Cappuccino.jpg"  },
          { name: 'Espresso', precio: 550, imagen : "../../public/Espresso.jpg"  },
          { name: 'Americano', precio: 650, imagen : "../../public/Americano.jpg"  },
          { name: 'Macchiato', precio: 750, imagen : "../../public/Macchiato.jpg"  },
          { name: 'Espresso Panna', precio: 700, imagen : "../../public/Espresso Panna.jpg"  }                 
        ]
        const linksImagenes = [
          { name: '../../public/Café Latte.jpg', link: 'https://youtu.be/uliUu_bwu8Q?si=Xpy1KGMrp1G7Xujs' },
          { name: "../../public/Cappuccino.jpg" , link: 'https://youtu.be/XGX3ncQVx9E?si=WT2EIwfzdij2oq6B'  },
          { name: "../../public/Espresso.jpg" , link: 'https://youtu.be/OUEA_AUD3j0?si=-mVSAoXHKiP-XSWe'   },
          { name: "../../public/Americano.jpg", link: 'https://youtu.be/wFty7SWfBFE?si=9IsPOCORfGr6b7Vu' },
          { name: "../../public/Macchiato.jpg", link: 'https://youtu.be/vELC8Gv0sWo?si=3gJgnCkEP21z3Qf9',   },
          { name: "../../public/Espresso Panna.jpg", link: 'https://youtu.be/ZyJUxLeyuF0?si=0N-4awZ53y1h1p1i' }   
        ]
 

          let [precio, setPrecio] = useState(0)
          let [cantidad, setCantidad] = useState(0)
          

    return (
      <>
        <h1>Lista de Precios</h1>
        <ListGroup className="list-group-flush">
        {menuItems.map(cafe => <ListGroup.Item> <h1>{cafe.name}  : ${cafe.precio}  </h1>
          <div> <a href= {(linksImagenes.find( link => link.name === cafe.imagen)).link}  target="_blank"> <Image style={{ width: 150, height: 'auto' }} src={ cafe.imagen } thumbnail fluid /></a></div>
          <br></br> <Button onClick={() => setPrecio(precio +=  cafe.precio,
            setCantidad (cantidad + 1)
          )}  variant="success"> Agregar Café</Button>  </ListGroup.Item> )}

        </ListGroup>

         <div>
          <h1> Cantidad de Cafés: {cantidad} con un total : ${precio}
          </h1>

        </div>
        </>
      )
}


export default MenuItem;

