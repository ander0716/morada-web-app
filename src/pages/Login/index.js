import { useState } from 'react';
import { Page } from '../../components/Page'
import { FormControl, FormControlInput, FormControlAction, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5';
export const Login = () => {

    const [visiblePass, setVisiblePass] = useState(false)

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }
    return (
        <Page hideMenu>
            <PageTitle>Iniciar sesión</PageTitle>
            <br />
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email" />
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"} />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible} />
                    </FormControlAction>
                </FormControl>
                <br />
                <Button label={"Ingresar"} onPress={() => alert('Iniciar sesión')} />
                <br />
            </form>
            <div>
                <p>Para registrarse has click en el siguiente botón</p>
                <Button label={"Registrarse"} linkTo="/signup" />
            </div>
        </Page>
    )
};