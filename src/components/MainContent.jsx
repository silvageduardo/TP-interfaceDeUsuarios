import React,{useState,useEffect} from 'react'
import { Ratio } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


export default function MainContent() {
   

    return (
    <>
     <div>
     <Card >
        <Card.Body id = "Nosotros" >
          <Card.Title ><h1><p>¿Por qué no tomarse un tiempo en la cafetería?</p> </h1>
          <br></br>
          <Image style={{ width: 600, height: 'auto' }} src="https://th.bing.com/th/id/OIG4.w.gg4c9GXAYr8i6Ciaxj?pid=ImgGn" fluid roundedCircle />
          <br></br><br></br>
          <p><h2> Con esa pregunta nos propusimos la creación de esta cafetería en la Unahur donde la intención es simple:</h2></p></Card.Title>
          
          <ul class="list-group">
  <li class="list-group-item">1° Descanso y Convivencia: La cafetería se convirtió en un oasis de descanso para los estudiantes. Aquí podían relajarse entre clases, compartir ideas y crear conexiones. No solo era un lugar para alimentarse, sino también para nutrir el espíritu.</li>
  <li class="list-group-item">2° Sostenibilidad y Conciencia: La nueva cafetería adoptó prácticas sostenibles. Desde ingredientes locales hasta envases biodegradables, se comprometió con el medio ambiente. Además, organizaba charlas sobre alimentación saludable y sensibilización ambiental.</li>
  <li class="list-group-item">3° Espacio de Costudying: La cafetería se transformó en un espacio de estudio colaborativo. Los estudiantes se reunen para trabajar en proyectos, debatir ideas y aprender juntos. El aroma del café se mezclaba con el zumbido de las conversaciones.</li>
  
</ul>
        </Card.Body>
    </Card>
     </div> <h2>Nuestra locación</h2><br></br>
     <div > 
      <div style={{ width: 550, height: 'auto' , margin: 'auto'}}>
      <Ratio aspectRatio= "16x9" >
      <iframe  id = "locacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.728709170099!2d-58.63887154540801!3d-34.61881938981754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1721540798855!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"> </iframe>
     </Ratio>
     </div><br></br>
     </div> <h2>Video presentación de la Unahur</h2><br></br>
     <div style={{ width: 550, height: 'auto', margin: 'auto' }}>
     <Ratio aspectRatio= "16x9">
     <iframe src="https://www.youtube.com/embed/yCHI-0BPX78?si=otXRXke5BhGNpy5z" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     </Ratio>
     </div>
      
    </>
  )
}
