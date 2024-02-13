import { Formcontact } from "@/components/Form/Formcontact";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import imgsupport from "../../assets/img/Background/support.jpg"

import './Contact.scss'

export function Contact() {

    return (
        <>
            <Header />
            <div className="container__contact">
                <div className="container__contact--row">
                    <div className="col">
                        <h3>Envianos tu opinion</h3>
                        <Formcontact />
                    </div>
                    <div className="col col-2">
                        <div className="col-2__row-1">
                            <h3>También puedes contactarnos:</h3>
                            <p>Número telefónico: (51) 999 - 8888 - 7777</p>
                            <p>Correo: spazio@gmail.com</p>

                        </div>
                        <div className="col-2__row-2">
                            <div className="img">
                                <img src={imgsupport} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}