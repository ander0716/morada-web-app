import { Page } from '../../components/Page'
import { FormControl, FormControlAction, FormControlInput, PageTitle } from '../../globalStyles'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5';

export const Signup = () => (
    <Page>
        <PageTitle>Registro de usuario</PageTitle>
        <br />
        <form>
            <FormControl>
                <FormControlInput>
                    <label>Nombre Completo</label>
                    <input type="text" autoFocus />
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Identificación</label>
                    <input type="number" />
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Teléfono</label>
                    <input type="number" />
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Correo electrónico</label>
                    <input type="email" />
                </FormControlInput>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Contraseña</label>
                    <input type="password" />
                </FormControlInput>
                <FormControlAction>
                    <ButtonIcon icon={IoEyeOff} onPress={() => { }} />
                </FormControlAction>
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Confirme la contraseña</label>
                    <input type="password" />
                </FormControlInput>
                <FormControlAction>
                    <ButtonIcon icon={IoEyeOff} onPress={() => { }} />
                </FormControlAction>
            </FormControl>
            <br />
            <Button label={"Guardar"} onPress={() => alert('Ok')} />
            <br />
        </form>
    </Page>
);