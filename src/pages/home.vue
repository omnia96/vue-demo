<template>
  <div>
    <v-btn @click="drawer = !drawer">侧边栏</v-btn>
    <var-button>ssss</var-button>
    <var-image
        width="85px"
        height="85px"
        src="https://varlet-varletjs.vercel.app/cat.jpg"
    />
  </div>
</template>

<script setup>
import {inject} from "vue";
const drawer = inject('drawer')
</script>

<style scoped>
</style>
