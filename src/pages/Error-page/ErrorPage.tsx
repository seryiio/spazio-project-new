import { useRouteError } from "react-router-dom";

import './ErrorPage.scss'
import { Header } from "@/components/Header/Header";


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div id="error-page">
                <h1>Oops!</h1>
                <p>La página que estás buscando no se encuentra aquí. <br /> Puede haber sido eliminada, cambiado su nombre o nunca existió. <br /> Por favor, verifica la URL e intenta de nuevo.
                </p>
                <p>
                    {/* <i>{error.statusText || error.message}</i> */}
                </p>
            </div>
        </>
    );
}