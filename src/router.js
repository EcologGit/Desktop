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

import marksPageComponent from './components/marksPage/marksComponent.vue';
import marksPlacesComponent from './components/marksPage/marksComponents/marksPlacesComponent.vue';
import marksEventsComponent from './components/marksPage/marksComponents/marksEventsComponent.vue';
import marksRoutesComponent from './components/marksPage/marksComponents/marksRoutesComponent.vue';
import marksSortPointsComponent from './components/marksPage/marksComponents/marksSortPointsComponent.vue';

import activityPageComponent from "./components/activityPage/activityPageComponent.vue";
import activityReportsComponent from "./components/activityPage/activityComponents/activityReportsComponent.vue";
import activityMedalsComponent from "./components/activityPage/activityComponents/activityMedalsComponent.vue";

import profilePageComponent from "./components/profilePage/profileComponent.vue";
import profileReportsComponent from "./components/profilePage/profileComponents/profileReportsComponent.vue";
import profileStatisticsComponent from "./components/profilePage/profileComponents/profileStatisticsComponent.vue";

import settingsComponent from "./components/settingsPage/settingsComponent.vue";

import objectComponent from "./components/objectPage/objectComponent.vue";

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
            path: '/marks/',
            component: marksPageComponent,
            children: [{
                    path: 'events',
                    component: marksEventsComponent,
                },
                {
                    path: 'places',
                    component: marksPlacesComponent,
                },
                {
                    path: 'routes',
                    component: marksRoutesComponent
                }, {
                    path: 'sortPoints',
                    component: marksSortPointsComponent
                },
            ],
        },
        {
            path: '/profile/',
            component: profilePageComponent,
            children: [{
                path: 'reports',
                component: profileReportsComponent,
            }, {
                path: 'statistics',
                component: profileStatisticsComponent,
            }, ],

        },
        {
            path: '/settings',
            component: settingsComponent,
        },
        {
            path: '/object',
            component: objectComponent,
        },


    ]
})