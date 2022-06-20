// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css'

// Vuetify
import { createVuetify } from 'vuetify'
import {components, directives} from "vuetify/dist/vuetify";
import appLightTheme from "../themes/app-light.theme";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'app-light',
    themes: {
      "app-light": appLightTheme,
    },
  },
});

