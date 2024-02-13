import './Listproperties.scss'
import '../Home-page/Home.scss'
import { Property } from "@/data/Property";
import { Card } from "@/components/Card/Card";

interface Props {
    districtFilter: string;
    properties: Property[];
}

export function Listproperties({ properties, districtFilter }: Props) {

    return (
        <>
            <div className="container__all-cards">
                <Card properties={properties} districtFilter={districtFilter} />
            </div>
        </>
    )
}

export default Listproperties