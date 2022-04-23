import { IconProfileWrapper, NameProfileWrapper, PropertyProfileWraper, SaludoProfileWrapper } from "./styles";

// export const PropertyProfile = (props) => (
//     <PropertyProfileWraper>
//         <props.Icon />
//         <label>{props.lblSaludo}</label>
//         <p>{props.lblNombre}</p>
//     </PropertyProfileWraper>
// )

export const PropertyProfile = ({icon: Icon, lblNombre, lblSaludo}) => (
    <PropertyProfileWraper>
        <IconProfileWrapper>
            <Icon />
        </IconProfileWrapper>
        {/* <SaludoProfileWrapper>
            
        </SaludoProfileWrapper> */}
        {/* <label>{lblSaludo}</label> */}
        <NameProfileWrapper>
           <label>{lblSaludo}</label> 
           <p>{lblNombre}</p> 
        </NameProfileWrapper>
        {/* <p>{lblNombre}</p> */}
    </PropertyProfileWraper>
)
