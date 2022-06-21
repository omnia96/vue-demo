export default class Snackbar {
    static value = false;
    static success = () => Snackbar.value = true;
};