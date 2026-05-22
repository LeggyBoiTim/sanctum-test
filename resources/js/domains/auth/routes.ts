import Home from './pages/Home.vue';
import Login from './pages/Login.vue';

export const authRoutes =  [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Login, name: 'login' },
];