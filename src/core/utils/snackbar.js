import {createApp, createVNode, nextTick} from "vue";
import vuetify from "../../plugins/vuetify";
import SnackbarVue from '../../components/Snackbar.vue'

const useMountComponent = (rootComponent) => {
    const app = createApp(rootComponent);
    app.use(vuetify);
    const root = document.createElement('div');
    root.style.width = '100%';
    root.style.height = '100vh';
    document.body.appendChild(root);
    return {
        instance: app.mount(root),
        unmount() {
            app.unmount();
            document.body.removeChild(root);
        },
    };
}
const snackbar = (props) => {
    const duration = 3000;
    props = {
        ...props,
        duration
    };
    const rootComponent = createVNode(SnackbarVue, props);
    const {instance, unmount} = useMountComponent(rootComponent);
    const { proxy, data } = instance.$;
    const RemoveSelf = (event) => {
        unmount()
    }
    nextTick(() => {
        data.modelValue = true;
        data.message = props.message;
        proxy?.$el.removeEventListener('transitionend', RemoveSelf)
        if (duration) {
            setTimeout(function  ()  {
                proxy?.$el.addEventListener('transitionend',  RemoveSelf)
                data.modelValue = false;
            },  duration)
        }
    }).then(() => {});
    return instance;
};
export default class Snackbar {
    static success = (message = 'success') => snackbar({color: 'green', message});
    static error = (message = 'error') => snackbar({color: 'red', message});
    static waring = (message = 'waring') => snackbar({color: 'orange', message});
}
;
