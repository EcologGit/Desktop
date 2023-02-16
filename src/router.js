import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

import initialComponent from "./components/initialComponent.vue";
import reviewComponent from "./components/reviewPage/reviewPageComponent.vue";
import eventsComponent from "./components/reviewPage/eventsPageComponent.vue";
import placesComponent from "./components/reviewPage/placesPageComponent.vue";
import routesComponent from "./components/reviewPage/routesPageComponent.vue";
import sortPointsComponent from "./components/reviewPage/sortPointPageComponent.vue";
import activityComponent from "./components/activityComponent.vue";
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
            path: '/activity',
            component: activityComponent
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
        {
            path: '/review/events',
            component: eventsComponent
        },
        {
            path: '/review/places',
            component: placesComponent
        },
        {
            path: '/review/routes',
            component: routesComponent
        },
        {
            path: '/review/sortPoints',
            component: sortPointsComponent
        },

    ]
})