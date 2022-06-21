<template>
  <VSnackbar :model-value="modelValue" :color="color" content-class="snackbar">{{message}}</VSnackbar>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  data: () => ({
    modelValue: false,
    color: 'info',
    message: 'message',
  }),
})
</script>
<style lang="scss">
.snackbar {
  color: white;
}
</style>
