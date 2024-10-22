"use client";

import zapatillasData from './zapatillasData';  // Importar los datos estáticos

const Catalogo = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Catálogo de Zapatillas</h2>
            <div className="row">
                {zapatillasData.map(zapatilla => (
                    <div className="col-md-4 mb-4" key={zapatilla.id}>
                        <div className="card h-100">
                            <img
                                src={`/img/${zapatilla.imagen}`}  // Ruta de la imagen en la carpeta public/img/
                                className="card-img-top"
                                alt={zapatilla.nombre}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{zapatilla.nombre}</h5>
                                <p className="card-text">Talla: {zapatilla.talla}</p>
                                <p className="card-text">Precio: ${zapatilla.precio}</p>
                                <button className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
