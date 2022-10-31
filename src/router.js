import { createRouter, createWebHashHistory } from "vue-router";

import MainInfo from "./components/MainInfo.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/:itemId",
            component: MainInfo,
        },
        {
            path: "/:notFound(.*)",
            component: NotFound,
        },
    ],
    linkActiveClass: "active",
});

export default router;
