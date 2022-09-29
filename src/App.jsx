import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import CuadroDeFrase from './Components/CuadroDeFrase';
import Titulo from './Components/Titulo';
import "./style.css"

function App() {
  return (
    <Container className='text-center my-5'>
      <Titulo></Titulo>
      <CuadroDeFrase></CuadroDeFrase>
    </Container>
  );
}

export default App;
