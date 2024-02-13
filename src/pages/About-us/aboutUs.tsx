import { Headerdark } from '@/components/Header/Headerdark';
import Footer from '@/components/Footer/Footer';

import './aboutUs.scss';

import Logo4 from '../../assets/img/Enterprise/Logo-4.svg';
import Vision from '../../assets/img/Enterprise/vision.jpg';
import Mission from '../../assets/img/Enterprise/mission.jpg';
import TeamSpazio from '../../assets/img/Enterprise/TeamSpazio.png';


export function aboutUs() {
    return (
        <>
            <Headerdark />
            <main className="container-about">
                <div className="container-about__1">
                    <div className="container-about__1--content">
                        <div className="text">
                            <span>NOSOTROS</span>
                            <h1>Construimos historia</h1>
                            <div className="button">
                                <a className="as" href="#">Conocenos</a>
                            </div>
                        </div>
                        <div className="img">
                            <img src={Logo4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-about__2">
                    <div className="container-about__2--content">
                        <div className="row">
                            <div className="row__column c1">
                                <h1>+3</h1>
                                <p>Años</p>
                            </div>
                            <div className="row__column cl1">
                                <h1>+2</h1>
                                <p>Proyectos Realizados</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-about__3">
                    <div className="description">
                        <h1>Nosotros</h1>
                        <p>Empresa líder en el mercado de la construcción e inmobiliaria en Perú. Con más de 2 años de trayectoria, nos enorgullece haber dejado una huella positiva en la industria, entregando proyectos de alta calidad y generando soluciones innovadoras para satisfacer las necesidades de nuestros clientes.</p>
                    </div>
                    <div className="img">
                        <img src={TeamSpazio} alt="" />
                    </div>
                </div>
                <div className="container-about__4">
                    <div className="vision">
                        <div className="col-img">
                            <img src={Vision} alt="" />
                        </div>
                        <div className="col-text">
                            <h2>Visión</h2>
                            <p>Ser la empresa líder en el mercado de la construcción e inmobiliaria en Perú, reconocida por nuestra
                                excelencia, innovación y compromiso con la satisfacción del cliente. En Spazio, aspiramos a
                                trascender las fronteras del desarrollo urbano, impulsando proyectos arquitectónicos vanguardistas y
                                sostenibles que redefinan el paisaje urbano y enriquezcan la calidad de vida de las personas. </p>
                        </div>
                    </div>
                    <div className="mission">
                        <div className="col-text">
                            <h2>Mision</h2>
                            <p>Transformar vidas a través de la construcción de hogares y espacios excepcionales. En Spazio, nos
                                comprometemos a brindar soluciones inmobiliarias innovadoras y de alta calidad que superen las
                                expectativas de nuestros clientes. Impulsados por la excelencia y la pasión por el diseño, creamos
                                comunidades sostenibles que enriquecen la vida de quienes las habitan.</p>
                        </div>
                        <div className="col-img">
                            <img src={Mission} alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default aboutUs