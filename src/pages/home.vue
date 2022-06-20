<template>
  <div>111</div>
</template>

<script setup>
import {get} from "../core/utils/request";

get("/test").then(data => {
  console.log(data);
});
</script>

<style scoped>
</style>
