import { useState, useEffect, useContext } from "react";
import { PropertyProfile } from "./components/PropertyProfile"
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation, IoPeople } from 'react-icons/io5'
import { PropertyCard } from "./components/PropertyCard/Index";
import { Page } from "../../components/Page";
import { UserContext } from "../../contexts/UserContext";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";


const Profile = [{
    icon: IoPeople, lblSaludo: "Hi,", lblNombre: "Anderson Vargas"
}]
const ALL_PROPERTIES_TYPES = 0;
const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: "Apartamentos" },
    { id: 2, icon: IoHome, label: "Casas" },
    { id: 3, icon: IoMap, label: "Lotes" },
    { id: 4, icon: IoPrism, label: "Fincas" },
    { id: 5, icon: IoLocation, label: "Locales" }
]

export const Home = () => {
    const [propertySelected, setPropertySelected] = useState(ALL_PROPERTIES_TYPES);
    const { user, setUser } = useContext(UserContext);
    const [properties, setProperties] = useState([]);


    const propertyTypeHandler = (id) => {
        // if (propertySelected === id) { // se deseleciona la propiedad
        //     setPropertySelected(ALL_PROPERTIES_TYPES)
        // } else {
        //     setPropertySelected(id);
        // };
        setPropertySelected(propertySelected === id ? ALL_PROPERTIES_TYPES : id);
    };

    useEffect(() => {
        //acciones a ejecutar
        // console.log('Se modifico el propertySelected', propertySelected)
        requestProperties()
    }, [propertySelected]);

    const requestProperties = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/properties',
                params: makePropertiesFiltes()
            });
            console.log('response', response);
            setProperties(response.data.response.properties);
        } catch (error) {
            console.log('error', error);
        }
    };

    const makePropertiesFiltes = () => {
        const filters = {};
        if (propertySelected !== ALL_PROPERTIES_TYPES) {
            filters['propertyType'] = propertySelected;
        };
        return filters;
    };

    return (
        <Page>
            {
                Profile.map(p =>
                    <PropertyProfile icon={p.icon} lblSaludo={p.lblSaludo} lblNombre={user.name} />)
            }
            <PropertyTypesContainer>
                {
                    PropertiesTypes.map((property, key) =>
                        <PropertyTypeButton icon={property.icon} label={property.label} selected={propertySelected === property.id} id={property.id} onPress={propertyTypeHandler} key={key} />)
                }
            </PropertyTypesContainer>
            {
                properties.map((item, key) => <PropertyCard {...item} key={key} />)
            }
            {/* <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard /> */}

        </Page>
    )
}