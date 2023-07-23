import {
    createApp
} from 'vue';
import App from './App.vue';
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';

import reviewPlacesComponent from './components/reviewPage/reviewComponents/reviewPlacesComponent.vue';
import reviewEventsComponent from './components/reviewPage/reviewComponents/reviewEventsComponent.vue';
import reviewRoutesComponent from './components/reviewPage/reviewComponents/reviewRoutesComponent.vue';
import reviewSortPointsComponent from './components/reviewPage/reviewComponents/reviewSortPointsComponent.vue';

import marksPlacesComponent from './components/marksPage/marksComponents/marksPlacesComponent.vue';
import marksEventsComponent from './components/marksPage/marksComponents/marksEventsComponent.vue';
import marksRoutesComponent from './components/marksPage/marksComponents/marksRoutesComponent.vue';
import marksSortPointsComponent from './components/marksPage/marksComponents/marksSortPointsComponent.vue';

import activityReportsComponent from "./components/activityPage/activityComponents/activityReportsComponent.vue";
import activityMedalsComponent from "./components/activityPage/activityComponents/activityMedalsComponent.vue";

import profileReportsComponent from "./components/profilePage/profileComponents/profileReportsComponent.vue";
import profileStatisticsComponent from "./components/profilePage/profileComponents/profileStatisticsComponent.vue";
import settingsComponent from "./components/profilePage/settingsComponent.vue";
import logInComponent from "./components/profilePage/logInComponent.vue";
import signUpComponent from "./components/profilePage/signUpComponent.vue";

import objectComponentEvent from "./components/objectPage/objectComponentEvent.vue";
import objectComponentRoute from "./components/objectPage/objectComponentRoute.vue";
import objectComponentSortPoint from "./components/objectPage/objectComponentSortPoint.vue";
import objectComponentPlace from "./components/objectPage/objectComponentPlace.vue";

import reportComponent from "./components/reportPage/reportComponent.vue";
import newReportComponent from "./components/createReportPage/newReportComponent.vue";



import router from "./router";





const app = createApp(App);
app.use(router);

export const url = 'http://81.163.30.36/django_api';

app.component('header-component', headerComponent);
app.component('footer-component', footerComponent);

app.component('reviewPlaces-component', reviewPlacesComponent);
app.component('reviewEvents-component', reviewEventsComponent);
app.component('reviewRoutes-component', reviewRoutesComponent);
app.component('reviewSortPoints-component', reviewSortPointsComponent);

app.component('marksPlaces-component', marksPlacesComponent);
app.component('marksEvents-component', marksEventsComponent);
app.component('marksRoutes-component', marksRoutesComponent);
app.component('marksSortPoints-component', marksSortPointsComponent);

app.component('activityReports-component', activityReportsComponent);
app.component('activityMedals-component', activityMedalsComponent);

app.component('profileReports-component', profileReportsComponent);
app.component('profileStatistics-component', profileStatisticsComponent);
app.component('settings-component', settingsComponent);
app.component('login-component', logInComponent);
app.component('sugnup-component', signUpComponent);

app.component('objectEvent-component', objectComponentEvent);
app.component('objectRoute-component', objectComponentRoute);
app.component('objectSortPointcomponent-', objectComponentSortPoint);
app.component('objectPlace-component', objectComponentPlace);

app.component('report-component', reportComponent);
app.component('newReport-component', newReportComponent);

app.mount('#app');