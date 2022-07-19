import { useContext } from "react";
import { Button } from '../../components/Button';
import { Page } from '../../components/Page'
import { UserContext } from "../../contexts/UserContext";
import { PageTitle, FooterFixed } from '../../globalStyles';

export const Account = () => {

    const { user, setUser } = useContext(UserContext);
    // const isAuth = false;

    const UserInfo = () => (
        <div>
            <h3>{user.name}</h3>
            <h5>{user.phone}</h5>
            <p>{user.email}</p>
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
                user.isAuthenticated ? <UserInfo /> : <UserUnauthorized />
            }
        </Page>
    )
};