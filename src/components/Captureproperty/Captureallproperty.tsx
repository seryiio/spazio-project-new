import { Property } from "@/data/Property";
import { INITIAL_PROPERTY } from "@/data/data";
import Selectproperty from "@/components/Select/Selectproperty";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

function Captureallproperty() {

    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        setProperties(INITIAL_PROPERTY);
    }, [])

    return (
        <>
            <Header />
            <Selectproperty properties={properties} />
            <Footer />
        </>
    )
}

export default Captureallproperty