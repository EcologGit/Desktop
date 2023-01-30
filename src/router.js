import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import initialComponent from "./components/initialComponent.vue";
import reviewComponent from "./components/reviewComponent.vue";
import feedComponent from "./components/feedComponent.vue";
import marksComponent from "./components/marksComponent.vue";
import profileComponent from "./components/profileComponent.vue";
import settingsComponent from "./components/settingsComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: initialComponent
        }, {
            path: '/review',
            component: reviewComponent,
        },
        {
            path: '/feed',
            component: feedComponent
        },
        {
            path: '/marks',
            component: marksComponent
        },
        {
            path: '/profile',
            component: profileComponent
        },
        {
            path: '/profile/settings',
            component: settingsComponent
        },
    ]
})