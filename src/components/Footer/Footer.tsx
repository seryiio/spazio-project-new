import { PureComponent } from 'react'

import './Footer.scss'
import { Link } from 'react-router-dom'

export class Footer extends PureComponent {
    render() {
        return (
            <div><footer className="footer">
                <div className="footer__content">
                    <div className="footer__content--row-1">
                        <div className="column-1">
                            <div className="social-media">
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
                                    <path
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </div>
                            <div className="phone-number">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
                                    <path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                                <p> (51) 999 - 8888 - 7777</p>
                            </div>
                            <div className="mail">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
                                    <path
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                                <p>spazio@gmail.com</p>
                            </div>
                        </div>
                        <div className="column-2">
                            <div className="enterprise">
                                <h4>Empresa</h4>
                                <Link to={`/nosotros`}>Nosotros</Link>
                                <Link to={`/beneficios`}>Beneficios</Link>
                            </div>
                            <div className="contact">
                                <h4>Contacto</h4>
                                <a href="/">Preguntar</a>
                                <a href="/">Reclamar</a>
                            </div>
                            <div className="benefits">
                                <h4>Beneficios</h4>
                                <a href="/">Venta de Propiedad</a>
                                <Link to={`/propiedades`}>Comprar departamento</Link>
                            </div>
                        </div>
                        <div className="column-3">
                            <div className="book-and-terms">
                                <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000"
                                        d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74Zm279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61Z" />
                                </svg>
                                <a href="/"> Libro de Reclamaciones</a>
                            </div>
                            <div className="terms">
                                <svg width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#000000" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z" />
                                    <path fill="#000000"
                                        d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z" />
                                </svg>
                                <a href="/">Términos y Condiciones</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__content--row-2">
                        <p>Derechos reservados &copy; 2023 Spazio</p>
                        <p className="watermark">Diseñado por WaynasCorp ♣</p>
                    </div>
                </div>
            </footer></div>
        )
    }
}

export default Footer