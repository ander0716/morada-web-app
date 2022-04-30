import { useState, useEffect } from "react";
import { PropertyProfile } from "./components/PropertyProfile"
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation, IoPeople } from 'react-icons/io5'
import { PropertyCard } from "./components/PropertyCard/Index";
import { Page } from "../../components/Page";


const Profile = [{
    icon: IoPeople, lblSaludo: "Hi,", lblNombre: "Anderson Vargas"
}]

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: "Apartamentos" },
    { id: 2, icon: IoHome, label: "Casas" },
    { id: 3, icon: IoMap, label: "Lotes" },
    { id: 4, icon: IoPrism, label: "Fincas" },
    { id: 5, icon: IoLocation, label: "Locales" }
]

export const Home = () => {
    const [propertySelected, setPropertySelected] = useState(1);

    const propertyTypeHandler = (id) => {
        setPropertySelected(id);
    };

    useEffect(() => {
        //acciones a ejecutar
        console.log('Se modifico el propertySelected', propertySelected)
    }, [propertySelected])

    return (
        <Page>
            {
                Profile.map(p =>
                    <PropertyProfile icon={p.icon} lblSaludo={p.lblSaludo} lblNombre={p.lblNombre} />)
            }
            <PropertyTypesContainer>
                {
                    PropertiesTypes.map(property =>
                        <PropertyTypeButton icon={property.icon} label={property.label} selected={propertySelected === property.id} id={property.id} onPress={propertyTypeHandler} />)
                }
            </PropertyTypesContainer>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />

        </Page>
    )
}