// import {components} from "vuetify/dist/vuetify";
import {createApp, createVNode, nextTick} from "vue";
import Snackbar from "../components/Snackbar.vue";

// const snackbar = (options) => {
//     const mountNode = document.createElement('div');
//     document.body.appendChild(mountNode);
//     const snackbar = createApp(components.VSnackbar, {...options});
//     if (!options.value) {
//         snackbar.unmount(mountNode);
//         document.body.removeChild(mountNode);
//     }
//     return snackbar.mount(mountNode);
// }

// export default {
//     install: (Vue, options) => {
//         // console.log(components.VSnackbar);
//         Vue.prototype['snackbar'] = () => {
//             snackbar({value: true});
//         }
//     },
// };
// export default snackbar;

const useMountComponent = (rootComponent) => {
    const app = createApp(rootComponent);
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
    const duration = typeof props !== 'string' ? props.duration : 3000;
    const rootComponent = createVNode(Snackbar, {...props});
    console.log(rootComponent);
    const {instance, unmount} = useMountComponent(rootComponent);
    console.log(instance);
    const { proxy, data } = instance.$;
    const RemoveSelf = (event) => {
        unmount()
    }
    nextTick(() => {
    //     // data.showToast = true;
    //     proxy?.$el.removeEventListener('transitionend', RemoveSelf)
    //     // ~duration  &&  (setTimeout(function  ()  {
    //     //     data.showToast  =  false
    //     //     proxy?.$el.addEventListener('transitionend',  RemoveSelf)
    //     // },  duration));
    }).then(() => {});
    // console.log(instance);
     return instance;
};

export default {
    // 挂载对象需要提供 install方法
    install: (app) => {
        app.config.globalProperties.$toast = snackbar;
    }
}