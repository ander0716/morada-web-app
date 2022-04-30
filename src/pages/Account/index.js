import { Button } from '../../components/Button';
import { Page } from '../../components/Page'
import { PageTitle, FooterFixed } from '../../globalStyles';

export const Account = () => {
    const isAuth = false;
    const UserInfo = () => (
        <div>
            <h3>Anderson</h3>
            <h5>12345678</h5>
            <p>micorreo@gmail.com</p>
            <hr />
            <FooterFixed>
                <Button label={"Cerrar sesión"} onPress={() => { alert('cerrar sesión') }} />
            </FooterFixed>
        </div>
    )
    const UserUnauthorized = () => (
        <div>
            <h2>No autenticado</h2>
            <p>Para acceder a tu perfil de usuario debes de iniciar sesión</p>
            <hr />
            <Button label={"Iniciar sesión"} linkTo="/login" />
        </div>
    )
    return (
        <Page>
            <PageTitle>Mi Cuenta</PageTitle>
            {
                isAuth ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};