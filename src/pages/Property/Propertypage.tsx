import { useParams } from 'react-router-dom';

import './Propertypage.scss'

import { useEffect, useState } from 'react';

import { getPropertyById } from '@/data/data';
import { Property } from '@/data/Property';
import Footer from '@/components/Footer/Footer';
import { Headerdark } from '@/components/Header/Headerdark';

export function Propertypage() {

    const { id } = useParams();
    const [property, setProperty] = useState<Property | null>(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const propertyData = getPropertyById({ id });
                if (propertyData) {
                    setProperty(propertyData);
                    console.log(propertyData);
                } else {
                    console.error('Property data is undefined.');
                }
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    return (
        <>
            <Headerdark />
            {property?.apartments.map((apartment) => (
                <div className="container-property">
                    <div className="container-property__content">
                        <div className="img">
                            <div className="opacity"><p>{property.district}</p> <h1>{property.name}</h1></div>

                            <img src={apartment.imgHall} alt="" />
                        </div>
                    </div>
                    <div className="container-property__content2">
                        <div className="row">
                            <div className="col">
                                <div className="col__direction">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                        viewBox="0 0 384 512">
                                        <path
                                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <p>{property.direction}, {property.province}, {property.district}</p>
                                </div>
                                <div className="col__data">
                                    <div className="col__data--dimension">
                                        <h2>{apartment.dimension}</h2><h3>m2</h3>
                                    </div>
                                    <div className="col__data--bed">
                                        <h2>{apartment.quantityBed}</h2> <h3>Dormitorios</h3>
                                    </div>
                                    <div className="col__data--bath">
                                        <h2>{apartment.quantityBath}</h2><h3>Baños</h3>
                                    </div>
                                    <div className="col__data--price">
                                        <h1>{apartment.price}</h1><h3>Soles</h3>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>Les presentamos una joya arquitectónica que redefine el concepto de hogar. Esta elegante propiedad, ubicada en el corazón de un vecindario exclusivo, combina a la perfección lujo y comodidad. Con sus amplios espacios y detalles de diseño impecables, cada rincón de esta residencia ha sido cuidadosamente pensado para ofrecer una experiencia de vida excepcional. Desde la impresionante fachada hasta los interiores meticulosamente decorados, cada elemento refleja un estilo contemporáneo y una atención inigualable a la calidad. Disfrute de la serenidad en el exuberante jardín privado o relájese en las amplias habitaciones llenas de luz natural. Esta propiedad es mucho más que una casa; es una declaración de elegancia y exclusividad. ¡No pierda la oportunidad de llamar a este lugar su hogar!</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="img">
                                    <img src={property.imagePrincipal} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-property__content3">
                        <div className="container-property__content3--row">
                            <div className="col">
                                <div className="col__img">
                                    <img src={apartment.maps} alt="" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="col__data-apartment">
                                    <h1>Recibe información de tu <span> próximo hogar</span></h1>
                                    <h2>Numero de apartamento</h2>
                                    <h3>Dimension</h3>
                                    <h3>Dormitorios</h3>
                                    <h3>Baños</h3>
                                    <div className="col__data-apartment--wapp">
                                        
                                        <a href="https://wa.me/51936925207">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={25} viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                            Consultar por Whastsapp</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />
                </div>
            ))}

        </>
    );
};

export default Propertypage;