import { IconWrapper, PropertyTypeButtonWraper } from "./styles";

// export const PropertyTypeButton = (props) => (
//     <Fragment>
//         <p>{props.icon}</p>
//         <p>{props.label}</p>
//     </Fragment>
// )

export const PropertyTypeButton = ({ icon: Icon, id, label, selected, onPress }) => (
    <PropertyTypeButtonWraper selected={selected} onClick={() => onPress(id)}>
        <IconWrapper selected={selected}>
            <Icon />
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtonWraper>
)