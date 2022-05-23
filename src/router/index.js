import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import ("../views/Home.vue")
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ("../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory,
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;