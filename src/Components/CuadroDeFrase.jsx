import Frase from "./Frase";
import Homero from "./Homero";


const CuadroDeFrase = ({personaje}) => {

    return (
        <article className="my-5 mx-1 p-3 bg-white row">
            <Homero personaje={personaje}></Homero>
            <Frase personaje={personaje}></Frase>

        </article>
    );
};

export default CuadroDeFrase; 