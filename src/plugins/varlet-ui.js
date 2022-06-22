import {Snackbar} from "@varlet/ui";
import '@varlet/ui/es/snackbar/style/index.js';

const varletUi = {
    install: (app) => {
        app.use(Snackbar);
    },
};
export default varletUi;