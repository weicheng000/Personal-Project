import { createWebHashHistory, createRouter  } from "vue-router";
import Index from "../views/index.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Index
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;