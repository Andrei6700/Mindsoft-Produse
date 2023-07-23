import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'


import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */ //ba mere

import Button from 'primevue/button';
import Card from 'primevue/card';
import DialogService from 'primevue/dialogservice'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.use(PrimeVue, { ripple: true });
app.use(DialogService);
app.use(router);

app.component('Button', Button);
app.component('Card', Card);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('MultiSelect', MultiSelect);

app.mount('#app')
