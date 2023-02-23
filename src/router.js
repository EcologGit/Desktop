import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

import initialPageComponent from "./components/mainPage/initialComponent.vue";
import reviewPageComponent from "./components/reviewPage/reviewPageComponent.vue";
import reviewPlacesComponent from './components/reviewPage/reviewComponents/reviewPlacesComponent.vue';
import reviewEventsComponent from './components/reviewPage/reviewComponents/reviewEventsComponent.vue';
import reviewRoutesComponent from './components/reviewPage/reviewComponents/reviewRoutesComponent.vue';
import reviewSortPointsComponent from './components/reviewPage/reviewComponents/reviewSortPointsComponent.vue';
import activityPageComponent from "./components/activityPage/activityPageComponent.vue";
import activityReportsComponent from "./components/activityPage/activityComponents/activityReportsComponent.vue";
import activityMedalsComponent from "./components/activityPage/activityComponents/activityMedalsComponent.vue";
import marksComponent from "./components/marksPage/marksComponent.vue";
import profileComponent from "./components/profilePage/profileComponent.vue";
import settingsComponent from "./components/profilePage/settingsComponent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: initialPageComponent
        }, {
            path: '/review/',
            component: reviewPageComponent,
            children: [{
                    path: 'events',
                    component: reviewEventsComponent,
                },
                {
                    path: 'places',
                    component: reviewPlacesComponent,
                },
                {
                    path: 'routes',
                    component: reviewRoutesComponent
                }, {
                    path: 'sortPoints',
                    component: reviewSortPointsComponent
                },
            ],
        },
        {
            path: '/activity/',
            component: activityPageComponent,
            children: [{
                    path: 'reports',
                    component: activityReportsComponent,
                },
                {
                    path: 'medals',
                    component: activityMedalsComponent,
                },
            ],
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