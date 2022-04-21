import { Fragment } from "react";
import {IoPersonSharp} from "react-icons/io5";

export const PropertyProfile = (props) => (
    <Fragment >
        <label>{props.lblSaludo}</label>
        <p>{props.lblNombre}</p>
    </Fragment>
)