import { useContext, useEffect } from 'react';
import {
    Route,
    Routes,
    useLocation
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Property } from './pages/Property';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { POCUploadImage } from './pages/POCUploadImage';
import { NotFound } from './pages/NotFound';
import { AddProperty } from './pages/AddProperty';
import { getToken, removeToken } from './utils/TokenLS';
import { UserContext } from './contexts/UserContext';
import { requestHttp, HTTP_VERBS } from './utils/HttpRequest';

export const Navigation = () => {

    const { user, setUser } = useContext(UserContext);
    const { pathname } = useLocation();

    useEffect(() => {
        checkUserAuthenticated();
    }, [pathname]);

    const checkUserAuthenticated = () => {
        const token = getToken();
        if (token && !user.isAuthenticated) {
            requestGetUserInfo(token);
        }
    };

    const requestGetUserInfo = async (token) => {
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: '/users/info',
                    token
                }
            );
            const { data } = response;
            setUser({
                name: data.response.user.name,
                phone: data.response.user.phone,
                role: data.response.user.role,
                identification: data.response.user.document,
                email: data.response.user.email,
                isAuthenticated: true
            });
        } catch (error) {
            console.log('error', error);
            removeToken();
        }
    };

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property/:idProperty' element={<Property />} />
            <Route path='/account' element={<Account />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/pocUploadImage' element={<POCUploadImage />} />
            <Route path='/add-property' element={<AddProperty />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};