import { useParams } from 'react-router-dom';
import { Page } from "../../components/Page";
import { requestHttp } from '../../utils/HttpRequest';
import { PropertyImageDetail } from "./components/PropertyImageDetail";

export const Property = () => {

    const { idProperty } = useParams();

    // const propertyRequest = async (id) => {
    //     try {
    //         const response = await requestHttp(
    //             {
    //                 endpoint: '/properties/login'
    //             }
    //         );
    //         // console.log(response);
    //         const { data: dataResponse } = response;
    //         // await requestGetUserInfo(dataResponse.response.token);
    //         setToken(dataResponse.response.token);

    //         showAlert('Bienvenido', 'Validación correcta', SW_ICON.SUCCES, () => { navigate('/') }); // si es exitoso vuleve al home
    //     } catch (error) {
    //         showAlert('Error', 'Credenciales incorrectas', SW_ICON.ERROR);
    //         console.log('error', error);
    //     }
    // };

    return (
        <Page>
            <h1>Detalle de la propiedad {idProperty}</h1>
            <PropertyImageDetail />
            <p>Contenido</p>
        </Page>
    )
}