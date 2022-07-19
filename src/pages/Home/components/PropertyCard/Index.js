import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle, Title } from "../../../../globalStyles";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getStaticImage } from "../../../../utils/StaticImage";
import { PropertyImageWrapper, PropertyCardWrapper, PropertyInfoWrapper } from "./styles";

export const PropertyCard = (props) => (
        <PropertyCardWrapper to={`/property/${props._id}`}>
            <PropertyImageWrapper>
                <img alt="foto propiedad" src={getStaticImage(props.mainImage)} />
            </PropertyImageWrapper>
            <PropertyInfoWrapper>
                <h3>{props.title}</h3>
                <SubTitle>
                    {getCityZoneLabel(props.city, props.zona)}
                </SubTitle>
                <PropertyTypeLabel typeId={props.propertyType} />
                <PropertyBusinessType businessType={props.businessType} />
                <Title>
                    {getCurrencyFormat(props.value)}
                </Title>
            </PropertyInfoWrapper>
        </PropertyCardWrapper>
)