import { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";

export const POCUploadImage = () => {

    const [file, setFile] = useState(null);

    const fileSelectedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        // console.log('event', event);
        // console.log('file', file);
        // requestUploadFile(file);
    };

    const uploadFileHandler = (event) => {
        if (file) {
            requestUploadFile(file);
        } else {
            showAlert('Error', 'selecciona un archivo', SW_ICON.ERROR);
        }
    };

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append('propertyImage', file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
                body: formData
            });
            showAlert('Archivo cargado', 'archivo importado exitosamente', SW_ICON.SUCCES);
            console.log('response', response);

        } catch (error) {
            console.log('error', error)

        }

    };

    return (
        <Fragment>
            <h2>Upload Image</h2>
            <input
                type='file'
                // multiple
                accept="image/png, image/jpeg"
                onChange={fileSelectedHandler}
            />
            <br/>
            <Button label={'subir imagen'} onPress={uploadFileHandler} />

        </Fragment>
    )
};