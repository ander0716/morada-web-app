import { PropertyTypeButtonWraper } from "./styles";
import {IoAmericanFootballOutline} from "react-icons/io5";

// export const PropertyTypeButton = (props) => (
//     <Fragment>
//         <p>{props.icon}</p>
//         <p>{props.label}</p>
//     </Fragment>
// )

export const PropertyTypeButton = ({icon, label}) => (
    <PropertyTypeButtonWraper >
        <IoAmericanFootballOutline />
        <p>{label}</p>
    </PropertyTypeButtonWraper>
)