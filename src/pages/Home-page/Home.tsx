import Footer from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import logoWhatsapp from '../../assets/img/Enterprise/icon-whatsapp.svg'

import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import "./Home.scss"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Property } from '@/data/Property';
import { Link } from 'react-router-dom';
import { Card } from '@/components/Card/Card';
import { useState } from 'react';

interface Props {
    properties: Property[];
}

export function Home({ properties }: Props) {

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

    const uniqueDistrict = Array.from(new Set(properties.map(propertiesPerDistrict => propertiesPerDistrict.district)));

    const listDistrict = uniqueDistrict.map(propertyDistrict =>
        <option key={propertyDistrict} value={propertyDistrict}>
            {propertyDistrict}
        </option>
    );

    const [selectedDistrict, setSelectedDistrict] = useState<string[]>([]);

    const handleSelectedDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedDistrict(selectedValues);
        console.log(selectedValues);
    }

    {
        return (
            <>
                <Header />
                <main className="container-home">
                    <div className="container__content-1">
                        <a href="#" className="btn-prev-slide"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg></a>
                        <a href="#" className="btn-next-slide"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></a>
                        <Swiper className="swiper"
                            navigation={{ nextEl: ".btn-next-slide", prevEl: ".btn-prev-slide" }} modules={[Navigation, Autoplay]}
                            autoplay={{ delay: 3000 }}
                        >
                            {
                                properties.map(property => {
                                    return (
                                        <>
                                            <SwiperSlide key={property.id} className="swiper-slide">
                                                <div className="swiper-slide__content">
                                                    <div className="swiper-slide__content--text">
                                                        <h2>Proyecto Terminado</h2>
                                                        <h1>{property.name}</h1>
                                                        <p>{property.direction}, {property.province}, {property.district}</p>
                                                        <div className="button">
                                                            <Link className="a" to={`propiedades/${property.id}`}>Ver mas</Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide__content--img">
                                                        <div className="opacity"></div>
                                                        <img src={property.imagePrincipal} alt="" />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </Swiper>
                        <div className="container__content-1--floating">
                            <h2>Buscar en tu zona</h2>
                            <div className="container__floating--inputs">
                                {/* <div className="department">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" /></svg>
                                    <Select>

                                        <SelectTrigger className="select-department">
                                            <SelectValue placeholder="Selecciona un departamento" />
                                        </SelectTrigger>
                                        <SelectContent className="z-[996]">
                                            <SelectGroup>
                                                <SelectLabel>Departamentos</SelectLabel>
                                                {listDeparments}
                                            </SelectGroup>
                                        </SelectContent>

                                    </Select>
                                </div> */}
                                <div className="district">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>

                                    {/* <Select  >
                                        <SelectTrigger className="select-district">
                                            <SelectValue placeholder="Selecciona un distrito" />
                                        </SelectTrigger>
                                        <SelectContent className="z-[996]" >
                                            <SelectGroup>
                                                <SelectLabel>Distritos</SelectLabel>
                                                {listDistrict}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select> */}
                                    <select className="select-district" onChange={handleSelectedDistrictChange}>
                                        <option value="" hidden>Selecciona un distrito...</option>
                                        {listDistrict}
                                    </select>
                                </div>
                                <Link to="" onClick={e => console.log(e)}>Buscar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container__container-2">
                        <div className="container__container-2--content">
                            <div className="content">
                                <div className="content__title">
                                    <div className="left">
                                        <h3>| POPULAR</h3>
                                        <h2>Lujo en Cada Rincón con<strong> Spazio</strong></h2>
                                    </div>
                                    <div className="right">
                                        <Link to={`/propiedades`}>Explorar
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 448 512">
                                                <path
                                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="content__carrousel">
                                    <Card properties={properties} districtFilter={"0"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__container-3">
                        <div className="container__container-3--content">
                            <div className="title">
                                <h3>| EN VENTA</h3>
                                <h2>Confianza que nos une</h2>
                            </div>
                            <div className="content-items">

                                <Swiper className="content-items__swiper-container"
                                    effect={'fade'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        420: {
                                            direction: 'horizontal'
                                        },
                                        720: {
                                            direction: 'horizontal'
                                        },
                                        1200: {
                                            direction: 'vertical'
                                        }
                                    }}
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    autoplay={{ delay: 5000 }}
                                >
                                    {
                                        properties.map(property => {
                                            return (
                                                <SwiperSlide key={property.id} className="content-items__swiper-container--swiper-slide ">
                                                    <div className="content-slide bg-white">
                                                        <div key={property.id} className="project-description">
                                                            <h1 className="name-project">{property.name}</h1>
                                                            <div className="location-project"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                                            </svg>
                                                                <p>{property.direction}, {property.province}, {property.district}</p>
                                                            </div>
                                                            <div className="min-max-values">
                                                                <div className="dimension">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                                        <path
                                                                            d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
                                                                    </svg>
                                                                    {Object.values(getMaxDimension(property)).map(value => (
                                                                        <p key={value}>{value}</p>
                                                                    ))}
                                                                    <p>m<sup>2</sup></p>
                                                                </div>

                                                                <div className="price-max">
                                                                    <h4>Desde: </h4>
                                                                    <h3>S/.</h3>
                                                                    {Object.values(getMinPrice(property)).map(value => (
                                                                        <h3 key={value}>{value}</h3>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="button-more-details">
                                                                <Link className="a" to={`propiedades/${property.id}`}>Más detalles</Link>
                                                            </div>
                                                        </div>
                                                        {property.apartments.map((apartment) => (
                                                            <div key={property.id} className="content-imgs">
                                                                <div className="content-imgs__principal">
                                                                    <img src={property.imagePrincipal} alt="" />
                                                                </div><div className="content-imgs__secundary-1">
                                                                    <img src={apartment.imgBath} alt="" />
                                                                </div>
                                                                <div className="content-imgs__secundary-2">
                                                                    <img src={apartment.imgHall} alt="" />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <a href="https://wa.me/51936925207" className="btn-whatsapp">
                        <img src={logoWhatsapp} alt="Contactar por Whatsapp" />
                    </a>
                </main>
                <Footer />
            </>
        )
    }
}

export default Home