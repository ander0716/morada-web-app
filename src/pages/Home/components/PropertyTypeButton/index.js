import { IconWrapper, PropertyTypeButtonWraper } from "./styles";

// export const PropertyTypeButton = (props) => (
//     <Fragment>
//         <p>{props.icon}</p>
//         <p>{props.label}</p>
//     </Fragment>
// )

export const PropertyTypeButton = ({icon: Icon, label}) => (
    <PropertyTypeButtonWraper >
        <IconWrapper>
            <Icon />
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtonWraper>
)