import 'bootstrap/dist/css/bootstrap.min.css'
import { Container} from 'react-bootstrap';
import CuadroDeFrase from './Components/CuadroDeFrase';
import Titulo from './Components/Titulo';
import "./style.css"
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner'

function App() {

  const [personaje, setpersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async() =>{
    
    try {
      //mostrar spinner
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setpersonaje(dato[0])
      //mostrar componente frase
      setMostrarSpinner(false);
    } catch (error) {
      console.log(Error);
      //mostrar un mensaje para el usuario
    }
    }

    //condicion lógica if, operador ternario, ( ?: )
    // (condicion lógica)?(logica a ejecutar si se cumple la condicion lógica):(codigo si no se cumple la condicion lógica) 
    const mostrarComponente = (mostrarSpinner === true)?(<Spinner></Spinner>):(<CuadroDeFrase personaje={personaje}></CuadroDeFrase>)

  return (
    <Container className='text-center my-5 p-5'>
      <Titulo consultarAPI={consultarAPI}></Titulo>
     {mostrarComponente}
    </Container>
  );
}

export default App;
