import { Swiper, SwiperSlide } from 'swiper/react';
import { Property } from '../../data/Property';


import './Card.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom';

interface Props {
    districtFilter: string;
    properties: Property[];
}


export function Card({ properties, districtFilter }: Props) {

    const getMinBed = (property: Property) => {
        return property.apartments.reduce(
            (acc, apartment) => {
                return {
                    minQuantityBed: Math.min(acc.minQuantityBed, apartment.quantityBed),
                };
            },
            {
                minQuantityBed: Infinity,
            }
        );
    };
    const getMaxBed = (property: Property) => {
        return property.apartments.reduce(
            (acc, apartment) => {
                return {
                    maxQuantityBed: Math.max(acc.maxQuantityBed, apartment.quantityBed),
                };
            },
            {
                maxQuantityBed: -Infinity,
            }
        );
    };

    // const getMinMaxBed = (property: Property) => {
    //     return property.apartments.reduce(
    //         (acc, apartment) => {
    //             return {
    //                 minQuantityBed: Math.min(acc.minQuantityBed, apartment.quantityBed),
    //                 maxQuantityBed: Math.max(acc.maxQuantityBed, apartment.quantityBed),
    //             };
    //         },
    //         {
    //             minQuantityBed: Infinity,
    //             maxQuantityBed: -Infinity,
    //         }
    //     );
    // };

    // const getMinBath = (property: Property) => {
    //     return property.apartments.reduce(
    //         (acc, apartment) => {
    //             return {
    //                 minQuantityBath: Math.min(acc.minQuantityBath, apartment.quantityBath),
    //             };
    //         },
    //         {
    //             minQuantityBath: Infinity,
    //         }
    //     );
    // };

    // const getMaxBath = (property: Property) => {
    //     return property.apartments.reduce(
    //         (acc, apartment) => {
    //             return {
    //                 maxQuantityBath: Math.max(acc.maxQuantityBath, apartment.quantityBath),
    //             };
    //         },
    //         {
    //             maxQuantityBath: -Infinity,
    //         }
    //     );
    // };

    const getMinPrice = (property: Property) => {
        return property.apartments.reduce(
            (acc, apartment) => {
                return {
                    minPrice: Math.min(acc.minPrice, apartment.price),
                };
            },
            {
                minPrice: Infinity,
            }
        );
    };

    const getMaxDimension = (property: Property) => {
        return property.apartments.reduce(
            (acc, apartment) => {
                return {
                    maxDimension: Math.max(acc.maxDimension, apartment.dimension),
                };
            },
            {
                maxDimension: -Infinity,
            }
        );
    };

    return (
        <>
            <Swiper className="py-2 px-2"
                slidesPerView={3} breakpoints={{
                    120: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}>
                {
                    properties
                        .filter((property) => property.district === districtFilter || districtFilter === "0")
                        .map((property) => (
                            <SwiperSlide key={property.id}>
                                <div className="card">
                                    <div className="img">
                                        <img src={property.imagePrincipal} alt="" />
                                    </div>
                                    <div className="description">
                                        <div className="ubication">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                                <path
                                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                            </svg>
                                            <p>{property.direction}, {property.province}, {property.district}</p>
                                        </div>
                                        <div className="data-apartment" key={property.id}>
                                            <div className="bedroom">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                                                    <path
                                                        d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                                                </svg>

                                                <div className="min-max-values">
                                                    {Object.values(getMinBed(property)).map(value => (
                                                        <p key={value}>{value}</p>
                                                    ))}
                                                    <p>-</p>
                                                    {Object.values(getMaxBed(property)).map(value => (
                                                        <p key={value}>{value}</p>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="dimension">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    <path
                                                        d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
                                                </svg>
                                                <div className="min-max-values">
                                                    {Object.values(getMaxDimension(property)).map(value => (
                                                        <p key={value}>{value}</p>
                                                    ))}
                                                    <p>m<sup>2</sup></p>
                                                </div>
                                            </div>
                                            <div className="see-more">
                                                <Link reloadDocument className="a" to={`/propiedades/${property.id}`}>Ver mas</Link>
                                            </div>
                                            <div className="price-max">
                                                <div className="min-max-values">
                                                    <h3>S/.</h3>
                                                    {Object.values(getMinPrice(property)).map(value => (
                                                        <h3 key={value}>{value}</h3>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__state">
                                        <span>
                                            {property.apartments.some(apartment => apartment.available) ? 'En venta' : 'Terminado'}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide >
                        ))
                }
            </Swiper >
        </>
    )
}