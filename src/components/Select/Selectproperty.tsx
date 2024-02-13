import { useState } from 'react';
import './Selectproperty.scss'
import { Property } from "@/data/Property";
import Listproperties from '../../pages/Property/ListProperties';

interface Props {
    properties: Property[];
}

export function Selectproperty({ properties }: Props) {

    const uniqueDistrict = Array.from(new Set(properties.map(propertiesPerDistrict => propertiesPerDistrict.district)));

    const listDistrict = uniqueDistrict.map(propertyDistrict =>
        <option key={propertyDistrict} value={propertyDistrict}>{propertyDistrict}</option>
    );

    const [selectedState, setSelectedState] = useState("0");

    const handleSelectedStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Array.from(e.target.selectedOptions)
            .map(option => option.value)
            .join(", ");
        setSelectedState(selectedValue);
        console.log(selectedValue);
    }

    const [selectedDistrict, setSelectedDistrict] = useState("");

    const handleSelectedDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Array.from(e.target.selectedOptions)
            .map(option => option.value)
            .join(", ");
        setSelectedState(selectedValue);
        console.log(selectedValue);
    }

    console.log(selectedDistrict);

    return (
        <>
            <div className="container__list-all-properties">
                <h1>Propiedades de Spazio</h1>
                <div className="container__list-all-properties--filter">
                    {/* <div className="state">
                        <span>Estado de propiedad:</span>
                        <div className="state__select">
                            <select name="" id="" onChange={handleSelectedStateChange}>
                                <option value="" hidden>Estado...</option>
                                <option value="venta">En venta</option>
                                <option value="terminado">Terminado</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="district">
                        <span>Distrito:</span>
                        <div className="district__select">
                            <select name="" id="" onChange={handleSelectedDistrictChange}>
                                <option value="" hidden>Selecciona un distrito...</option>
                                <option value="0">Todos</option>
                                {listDistrict}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Listproperties properties={properties} districtFilter={selectedState} />
        </>
    )
}

export default Selectproperty