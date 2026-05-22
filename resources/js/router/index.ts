import { createRouter, createWebHistory } from "vue-router";
import { destroyErrors, destroyMessage } from "../services/error";
import { authRoutes } from "../domains/auth/routes";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...authRoutes,
    ],
});

router.beforeEach(() => {
    destroyErrors();
    destroyMessage();
    return true;
});