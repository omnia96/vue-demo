<template>
  <v-navigation-drawer v-model="drawer"></v-navigation-drawer>
  <router-view></router-view>
</template>
<script setup>
import {provide, ref} from "vue";

const drawer = ref(false);
provide('drawer', drawer)
</script>