import { useContext } from 'react';
import { IoHome, IoPerson, IoStar, IoAddCircle } from 'react-icons/io5'
import { UserContext } from '../../contexts/UserContext';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';

const MenuCustumerItems = [
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoStar,
        label: 'Favoritos',
        path: '/favorites'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    },
];

const MenuAdminItems = [
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoAddCircle,
        label: 'Agregar',
        path: '/add-property'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    },
];


export const Menu = () => {

    const {user} = useContext(UserContext)

    // const typeProfile = 2;
    return (
        <MenuWrapper>
            {
                user.role === 1 &&
                MenuCustumerItems.map(item => <MenuItem {...item} />)
            }
            {
                user.role === 2 &&
                MenuAdminItems.map(item => <MenuItem {...item} />)
            }
        </MenuWrapper>
    )

};