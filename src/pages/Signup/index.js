import { useState } from 'react';
import { Page } from '../../components/Page'
import { FormControl, FormControlAction, FormControlInput, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from 'react-hook-form';
import { showAlert, SW_ICON } from '../../utils/SwAlert';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [visiblePass, setVisiblePass] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }

    const onSubmitSingup = (data) => {
        console.log('data', data);
        signupRequest(data);
    }

    const signupRequest = async (data) => {
        try {
            const response = await requestHttp(
                {
                    endpoint: '/users/signup',
                    body: data
                }
            );
            console.log(response);
            showAlert('Ok', 'Usuario creado correctamente', SW_ICON.SUCCES, () => { navigate('/login')});
        } catch (error) {
            console.log('error', error);
            showAlert('Error', 'datos incorrectos', SW_ICON.ERROR);
        }
    }

    return (
        <Page>
            <PageTitle>Registro de usuario</PageTitle>
            <br />
            <form onSubmit={handleSubmit(onSubmitSingup)}>
                <FormControl>
                    <FormControlInput>
                        <label>Nombre Completo</label>
                        <input type="text" autoFocus {...register('name', { required: true})} />
                        {errors.name && <span>Este campo es requerido</span>}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Tipo Documento</label>
                        <input type="text" {...register('documentType', { required: true})}/>
                        {errors.documentType && <span>Este campo es requerido</span>}
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Número Identificación</label>
                        <input type="number" {...register('document', { required: true})}/>
                        {errors.document && <span>Este campo es requerido</span>}
                    </FormControlInput>
                </FormControl>
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
                        <input type={visiblePass ? "text" : "password"}  {...register('password', {required: true})}/>
                        {errors.password && <span>El campo contraseña es requerido</span>}
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Confirme la contraseña</label>
                        <input type={visiblePass ? "text" : "password"} />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Teléfono</label>
                        <input type="number" {...register('phone', { required: true})}/>
                        {errors.phone && <span>Este campo es requerido</span>}
                    </FormControlInput>
                </FormControl>
                <br />
                <Button disabled={!isValid} type='submit' onPress={() => { }} label={"Guardar"} />
                <br />
            </form>
        </Page>
    )
};