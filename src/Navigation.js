import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Property } from './pages/Property';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { NotFound } from './pages/NotFound';



export const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property' element={<Property />} />
            <Route path='/account' element={<Account/>} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)