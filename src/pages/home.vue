<template>
  <div>
    <v-btn @click="drawer = !drawer">侧边栏</v-btn>
  </div>
</template>

<script setup>
import {inject} from "vue";
const drawer = inject('drawer')
</script>

<style scoped>
</style>
