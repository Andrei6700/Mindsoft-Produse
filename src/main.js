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
import SplitButton from 'primevue/splitbutton';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
// app.use(PrimeVue, { ripple: true });
app.use(DialogService);

app.component('Button', Button);
app.component('Card', Card);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('MultiSelect', MultiSelect);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('SplitButton', SplitButton);



app.mount('#app')
