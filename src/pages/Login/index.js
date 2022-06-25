import { useState } from 'react';
import { Page } from '../../components/Page'
import { FormControl, FormControlInput, FormControlAction, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from 'react-hook-form';

export const Login = () => {

    const [visiblePass, setVisiblePass] = useState(false);
    const { register, handleSubmit } = useForm();

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
        } catch (error) {
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
                        <input type="email" {...register('email')} />
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"} {...register('password')} />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>
                <br />
                <Button type='submit' onPress={() => { }} label="Ingresar" />
                <br />
            </form>

            <div>
                <p>Para registrarse has click en el siguiente botón</p>
                <Button label={"Registrarse"} linkTo="/signup" />
            </div>
        </Page>
    )
};