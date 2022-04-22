import { Fragment } from "react";
import {PropertyProfile} from "./components/PropertyProfile"
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import {IoBusiness, IoHome, IoMap, IoPrism, IoLocation} from 'react-icons/io5'
import { PropertyCard } from "./components/PropertyCard/Index";
import { Page } from "../../components/Page";

const Profile = {
    img:"img", lblSaludo: "Hi,", lblNombre: "Anderson Vargas" 
}

const PropertiesTypes = [
    {icon: IoBusiness, label: "Apartamentos"},
    {icon: IoHome, label: "Casas"},
    {icon: IoMap, label: "Lotes"},
    {icon: IoPrism, label: "Fincas"},
    {icon: IoLocation, label: "Locales"}
]

export const Home = () => (
    <Page>
            <h1>Home - Morada</h1>
            <PropertyProfile img={Profile.img}/>
            <PropertyProfile lblSaludo={Profile.lblSaludo}/>
            <PropertyProfile lblNombre={Profile.lblNombre}/>

        <PropertyTypesContainer>
            {
                PropertiesTypes.map(property => 
                <PropertyTypeButton icon={property.icon} label={property.label} />)
            }
        </PropertyTypesContainer>

        <PropertyCard/>
    </Page>
)