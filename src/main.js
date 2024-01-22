import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
// import CopyToClipboard from '@/includes/copy-to-clipboard.js';
import VeeValidatePlugin from './includes/validations.js';

const app = createApp(App);

app.use(createPinia());
app.use(VeeValidatePlugin);
// app.use(CopyToClipboard);

app.mount('#app');
