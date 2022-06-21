import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import errorHandle from './plugins/error-handle'
import { loadFonts } from './plugins/webfontloader'
import router from "./router";
import './main.scss';
import snackbar from "./plugins/snackbar";

loadFonts().then(() => {});

createApp(App)
    .use(router)
    .use(vuetify)
    .use(snackbar)
    .use(errorHandle)
    .mount('#app')

