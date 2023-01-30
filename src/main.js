import {
    createApp
} from 'vue';
import App from './App.vue';
import headerComponent from './components/headerComponent.vue';
import footerComponent from './components/footerComponent.vue';
import router from "./router";


const app = createApp(App);
app.use(router);
app.component('header-component', headerComponent);
app.component('footer-component', footerComponent);
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