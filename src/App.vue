<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar :model-value="snackbar.value"></v-snackbar>
  </v-app>
</template>

<script setup>
import Snackbar from "./core/utils/snackbar";
import {ref} from "vue";
const snackbar = ref(Snackbar);
</script>
