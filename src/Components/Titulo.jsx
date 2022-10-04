//import titulo from '/img/titulo.png'

import { Button } from "react-bootstrap";

const Titulo = ({consultarAPI}) => {
    return (
        <div>
            <img src='/img/titulo.png' alt="" className="w-100 mb-4"></img>
            <Button className="button" variant="danger" onClick={consultarAPI}>Obtener Frase</Button>
        </div>
    );
};

export default Titulo;