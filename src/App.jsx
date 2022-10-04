import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import CuadroDeFrase from './Components/CuadroDeFrase';
import Titulo from './Components/Titulo';
import "./style.css"
import { useEffect, useState } from 'react';

function App() {

  const [personaje, setpersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async() =>{
    
    try {
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setpersonaje(dato[0])
      
    } catch (error) {
      console.log(error);
      //mostrar un mensaje para el usuario
    }
    }


  return (
    <Container className='text-center my-5 p-5'>
      <Titulo consultarAPI={consultarAPI}></Titulo>
      <CuadroDeFrase personaje={personaje}></CuadroDeFrase>
    </Container>
  );
}

export default App;
