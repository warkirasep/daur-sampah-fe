import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import ("../views/Home.vue"),
        meta: {
            plainLayout: false
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import ("../views/Home.vue"),
        meta: {
            plainLayout: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ("../components/Login.vue"),
        meta: {
            plainLayout: true 
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;