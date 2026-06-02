import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Me from './pages/Me.vue';

export const authRoutes =  [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/me', component: Me, name: 'me' },
];