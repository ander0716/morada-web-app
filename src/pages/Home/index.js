import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";

const PropertyProfile = {
    img:"img", lblSaludo: "Hi,", lblNombre: "Anderson Vargas" 
}

const PropertiesTypes = [
    {icon: "icono-apartamento", label: "Apartamento"},
    {icon: "icono-casa", label: "Casa"},
    {icon: "icono-lote", label: "Lote"},
    {icon: "icono-finca", label: "Finca"},
    {icon: "icono-local", label: "Local"}
]

export const Home = () => (
    <Fragment>
            <h1>Home - Morada</h1>
            {/* {
                Profile.map(item = >
                    <PropertyProfile></PropertyProfile>)
            } */}
        <PropertyTypesContainer>
            {
            PropertiesTypes.map(property => 
            <PropertyTypeButton icon={property.icon} label={property.label} />)
            }
        </PropertyTypesContainer>
    </Fragment>
)