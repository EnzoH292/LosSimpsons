

const Homero = ({personaje}) => {
    return (
        <img src={personaje.image} alt={personaje.character} className="w-50 col-lg-2 col-md-2 col-sm-12 text-sm-center"></img>
    );
};

export default Homero;