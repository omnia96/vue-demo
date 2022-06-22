import {ActionSheet} from "@varlet/ui";
import '@varlet/ui/es/action-sheet/style/index.js';

const varletUi = {
    install: (app) => {
        app.use(ActionSheet);
    },
};
export default varletUi;