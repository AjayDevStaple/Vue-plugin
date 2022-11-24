import {App, createApp} from 'vue'
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import AppComponent from './app.vue';
import PrimeVue from 'primevue/config';
import Knob from 'primevue/knob';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
import Card from 'primevue/card';
import 'primevue/resources/primevue.min.css';
// import 'primevue/resources/themes/mdc-light-indigo/theme.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'HomePage',
        path: '/home', component: () => import('./components/pages/home.page.vue')
    }, 
    {
        name : 'register_remedy',
        path: '/register_remedy' , component : () => import('./components/pages/register_remedy.page.vue')
    },
    {
        name: 'Inquiry_cancellation',
        path: '/inquiry_cancellation',  component : () => import('./components/pages/InquiryandCancellation.page.vue')
    },
    {
        name : 'StopConsultation',
        path : '/stop_consultation_query' , component : () => import('./components/pages/stop_consultation_query.page.vue')
    }

]

export const router = createRouter({
    history: createWebHistory('#/'),
    routes: routes
})

const app: App<Element> = createApp(AppComponent)
app.use(PrimeVue, {ripple: true});
app.component('Knob', Knob);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Button', Button);
app.component('Card', Card);
app.use(router)

app.mount('#wp-vue-frontend-app')