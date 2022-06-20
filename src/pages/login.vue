<template>
  <div>
    <v-text-field
        :counter="10"
        label="First name"
        required
        color="red"
    ></v-text-field>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";

console.log(useRouter().getRoutes());
</script>
