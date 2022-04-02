import { Fragment } from "react";

export const PropertyProfile = ({img, lblSaludo, lblNombre}) => (
    <Fragment >
        <p>{img}</p>
        <p>{lblSaludo}</p>
        <p>{lblNombre}</p>
    </Fragment>
)