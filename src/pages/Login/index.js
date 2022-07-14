import { useState } from 'react';
import { Page } from '../../components/Page'
import { FormControl, FormControlInput, FormControlAction, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from 'react-hook-form';
import { showAlert, SW_ICON } from '../../utils/SwAlert';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [visiblePass, setVisiblePass] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }

    const onSubmitLogin = (data) => {
        console.log('data', data);
        loginRequest(data);
    }

    const loginRequest = async (data) => {
        try {
            // const data = {
            //     email: "alfredo@sispos.com",
            //     password: "09876"
            // };
            const response = await requestHttp(
                {
                    endpoint: '/users/login',
                    body: data
                }
            );
            console.log(response);
            showAlert('Bienvenido', 'Validación correcta', SW_ICON.SUCCES, () => { navigate('/')});
        } catch (error) {
            showAlert('Error', 'Credenciales incorrectas', SW_ICON.ERROR);
            console.log('error', error);
        }
    }

    return (
        <Page hideMenu>
            <PageTitle>Iniciar sesión</PageTitle>
            <br />
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email" {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} />
                        {errors.email?.type === 'required' && <span>Este campo es requerido</span>}
                        {errors.email?.type === 'pattern' && <span>Ingrese un correo electrónico valido</span>}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"} {...register('password', { required: true })} />
                        {errors.password && <span>El campo contraseña es requerido</span>}
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>
                <br />
                {/* {isValid ? 'valid' : 'no valid'} */}
                <Button disabled={!isValid} type='submit' onPress={() => { }} label="Ingresar" />
                <br />
            </form>

            <div>
                <p>Para registrarse has click en el siguiente botón</p>
                <Button label={"Registrarse"} linkTo="/signup" />
            </div>
        </Page>
    )
};