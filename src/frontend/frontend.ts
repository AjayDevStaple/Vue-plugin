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


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/registration',
    },
    {
        name: 'SectionRegistration',
        path: '/registration', component: () => import('./components/pages/sectionregistration/registration.page.vue')
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
    },
    {
        name : 'Physicianregistration',
        path : '/physician_registration' , component : () => import('./components/pages/phsyician_registration.page.vue')
    },
    {
        name : "Booking" ,
        path: '/booking' , component : () =>  import('./../frontend/components/pages/Booking.page.vue')
    },
   
    
    {
        name: 'SubService',
        path: '/subservice', component: () => import('./components/pages/sectionregistration/subservice.page.vue')
    },
    {
        name : 'Booking-Success',
        path: '/booking-successfully' , component: () => import('./components/pages/Booking-Success.page.vue')
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