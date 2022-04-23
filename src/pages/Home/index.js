import { Fragment } from "react";
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
    { icon: IoBusiness, label: "Apartamentos" },
    { icon: IoHome, label: "Casas" },
    { icon: IoMap, label: "Lotes" },
    { icon: IoPrism, label: "Fincas" },
    { icon: IoLocation, label: "Locales" }
]

export const Home = () => (
    <Page>
        {
            Profile.map(p =>
                <PropertyProfile icon={p.icon} lblSaludo={p.lblSaludo} lblNombre={p.lblNombre} />)
        }


        <PropertyTypesContainer>
            {
                PropertiesTypes.map(property =>
                    <PropertyTypeButton icon={property.icon} label={property.label} />)
            }
        </PropertyTypesContainer>

        <PropertyCard />
    </Page>
)