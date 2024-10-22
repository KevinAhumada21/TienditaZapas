'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Modal } from 'react-bootstrap';

export default function ZapatillasPage() {
  const [zapatillas, setZapatillas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedZapatilla, setSelectedZapatilla] = useState(null);

  useEffect(() => {
    const zapatillasData = [
      {
        _id: 1,
        nombre: 'Adidas Hoops 3.0 Negra',
        precio: '55.000',
        tallas: ['42/27cm'],
        imagenes: [
          'adidas_hoops.jpeg',
          'adidas_hoops1.jpeg',
          'adidas_hoops2.jpeg',
          'adidas_hoops3.jpeg',
        ]
      },
      {
        _id: 2,
        nombre: 'Adidas Break Start Blanco y Negro',
        precio: '55.000',
        tallas: ['40/25.5cm', '42/27cm'],
        imagenes: [
          'adidas_break_start_blanco_negro.jpeg',
          'adidas_break_start_blanco_negro1.jpeg',
          'adidas_break_start_blanco_negro2.jpeg',
        ]
      },
      {
        _id: 3,
        nombre: 'Adidas Breaknet 2.0',
        precio: '55.000',
        tallas: ['37.5/23.5cm'],
        imagenes: [
          'adidas_breaknet.jpeg',
          'adidas_breaknet2.jpeg',
        ]
      },
      {
        _id: 4,
        nombre: 'Puma Skyrocket Lite Negra',
        precio: '40.000',
        tallas: ['39/25cm', '40/25.5cm'],
        imagenes: [
          'puma_skyrocket_lite_negra_1.jpeg',
          'puma_skyrocket_lite_negra_2.jpeg',
        ]
      },
      {
        _id: 5,
        nombre: 'Puma Carina Street',
        precio: '50.000',
        tallas: ['38/24cm', '37/23cm', '37.5/23.5cm'],
        imagenes: [
          'puma_carina_street_1.jpeg',
          'puma_carina_street_2.jpeg',
          'puma_carina_street_3.jpeg',
        ]
      },
      {
        _id: 6,
        nombre: 'Puma Rebound V6 Low Bling',
        precio: '50.000',
        tallas: ['37.5/23.5cm'],
        imagenes: [
          'puma_rebound_v6.jpeg',
          'puma_rebound_v6.1.jpeg',
        ]
      },
      {
        _id: 7,
        nombre: 'Puma Vikky Stacked L',
        precio: '50.000',
        tallas: ['38.5/24.5cm', '37.5/23.5cm'],
        imagenes: [
          'puma_vikky_stacked_L_1.jpeg',
          'puma_vikky_stacked_L_2.jpeg',
          'puma_vikky_stacked_L_3.jpeg',
        ]
      },
      {
        _id: 8,
        nombre: 'W Nike Court Vision Alta LTR',
        precio: '70.000',
        tallas: ['38/24cm', '37.5/23.5cm'],
        imagenes: [
          'nike_court_vision_alta_1.jpeg',
          'nike_court_vision_alta_2.jpeg',
          'nike_court_vision_alta_3.jpeg',
        ]
      },
      {
        _id: 9,
        nombre: 'Nike Air Zoom Arcadia 2 (GS)',
        precio: '55.000',
        tallas: ['38/24cm'],
        imagenes: [
          'nike_air_zoom_arcadia.jpeg',
          'nike_air_zoom_arcadia1.jpeg',
        ]
      },
      {
        _id: 10,
        nombre: 'Reebok ATR Mid Unisex',
        precio: '80.000',
        tallas: ['40.5/26cm'],
        imagenes: [
          'reebok_atr_mid.jpeg',
          'reebok_atr_mid1.jpeg',
          'reebok_atr_mid2.jpeg',
        ]
      },
      {
        _id: 11,
        nombre: 'Nike Court Vision Mid NN Gris',
        precio: '60.000',
        tallas: ['43/27.5cm'],
        imagenes: [
          'nike_court_vision_mid.jpeg',
          'nike_court_vision_mid2.jpeg',
          'nike_court_vision_mid3.jpeg',
        ]
      },
    ];

    setZapatillas(zapatillasData);
  }, []);

  const handleShow = (zapatilla) => {
    setSelectedZapatilla(zapatilla);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedZapatilla(null);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Zapatillas</h1>
      <div className="row">
        {zapatillas.length > 0 ? (
          zapatillas.map((zapatilla) => (
            <div key={zapatilla._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100" onClick={() => handleShow(zapatilla)} style={{ cursor: 'pointer' }}>
                <img
                  src={`/images/${zapatilla.imagenes[0]}`}
                  alt={zapatilla.nombre}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{zapatilla.nombre}</h5>
                  <p className="card-text text-center">Precio: {zapatilla.precio}</p>
                  <p className="card-text text-center">Tallas: {zapatilla.tallas.join(', ')}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No hay zapatillas disponibles.</p>
          </div>
        )}
      </div>

      {/* Modal para las imágenes */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedZapatilla?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedZapatilla && (
            <div className="row">
              <div className="col-12">
                <img
                  src={`/images/${selectedZapatilla.imagenes[0]}`}
                  alt={selectedZapatilla.nombre}
                  className="d-block w-100"
                  style={{ height: '600px', objectFit: 'contain' }} // Agranda la imagen
                />
              </div>
              <div className="col-12 mt-3">
                <h5>Imágenes:</h5>
                <div className="d-flex justify-content-start flex-wrap">
                  {selectedZapatilla.imagenes.map((imagen, index) => (
                    <img
                      key={index}
                      src={`/images/${imagen}`}
                      alt={selectedZapatilla.nombre}
                      className="img-thumbnail m-1"
                      style={{ height: '100px', width: 'auto', cursor: 'pointer' }}
                      onClick={() => {
                        const img = document.querySelector('.modal-body img.d-block');
                        img.src = `/images/${imagen}`; // Cambiar imagen principal al hacer clic
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
