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

import settingsComponent from "./components/settingsPage/settingsComponent.vue";

import objectComponent from "./components/objectPage/objectComponent.vue";

import router from "./router";



const app = createApp(App);
app.use(router);
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

app.component('object-component', objectComponent);

app.mount('#app');

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.parentElement.matches('.dropdown-content')) {
        let dropdowns = document.querySelector(".dropdown-content");
        let dropdbtn = document.querySelector(".dropbtn");
        if (dropdowns) {
            dropdowns.style.display = 'none';
            dropdbtn.classList.remove('active');
        }
    }
};