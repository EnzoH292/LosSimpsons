

const Frase = ({personaje}) => {
    return (
        <div className="mt-4 col-lg-6 col-md-6 col-sm-12 text-start">
            <h1>{personaje.character}</h1>
            <p>{personaje.quote}</p>
        </div>
    );
};

export default Frase;