import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from "../../components/Page";
import { SubTitle, Title } from '../../globalStyles';
import { getCurrencyFormat } from '../../utils/CurrencyFormat';
import { getCityZoneLabel } from '../../utils/GetDataConstants';
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';
import { getStaticImage } from '../../utils/StaticImage';
import { PropertyCard } from '../Home/components/PropertyCard/Index';
import { PropertyImageWrapper } from '../Home/components/PropertyCard/styles';
import { PropertyImageDetail } from "./components/PropertyImageDetail";

export const Property = () => {

    const { idProperty } = useParams();
    const [properties, setProperties] = useState([]);

    useEffect(() => {

        // setTimeout(() => {
        // propertyRequest(idProperty)
        // }, 2000);

        propertyRequest(idProperty)
    }, []);

    const propertyRequest = async (idProperty) => {
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: '/properties/' + idProperty
                }
            );
            console.log(response);
            const { data: dataResponse } = response;
            // await requestGetUserInfo(dataResponse.response.token);
            setProperties(dataResponse.response.property);

        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <Page>
            <Title>
                {properties.title}
            </Title>
            <SubTitle>
                {properties.shortDescription}
            </SubTitle>
            <SubTitle>
                {properties.description}
            </SubTitle>
            <SubTitle>
                {getCityZoneLabel(properties.city, properties.zona)}
            </SubTitle>
            <Title>
                {getCurrencyFormat(properties.value)}
            </Title>
            <PropertyImageWrapper>
                <img alt="foto propiedad" src={getStaticImage(properties.mainImage)} />
            </PropertyImageWrapper>
        </Page>
    )
}