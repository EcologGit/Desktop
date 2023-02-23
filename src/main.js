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

import activityReportsComponent from "./components/activityPage/activityComponents/activityReportsComponent.vue";
import activityMedalsComponent from "./components/activityPage/activityComponents/activityMedalsComponent.vue";

import router from "./router";



const app = createApp(App);
app.use(router);
app.component('header-component', headerComponent);
app.component('footer-component', footerComponent);

app.component('reviewPlaces-component', reviewPlacesComponent);
app.component('reviewEvents-component', reviewEventsComponent);
app.component('reviewRoutes-component', reviewRoutesComponent);
app.component('reviewSortPoints-component', reviewSortPointsComponent);

app.component('activityReports-component', activityReportsComponent);
app.component('activityMedals-component', activityMedalsComponent);

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