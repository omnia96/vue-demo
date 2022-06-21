<template>
  <div>
    <v-text-field
        :counter="10"
        label="First name"
        required
        color="red"
    ></v-text-field>
    <v-btn @click="Snackbar.success()">sss</v-btn>
  </div>
</template>
<script setup>
import {post} from "../core/utils/request";
import Snackbar from "../core/utils/snackbar";
post("/api/user/getcode").then(data => {
  console.log(data);
  Snackbar.success(data.toString());
});

Snackbar.waring();
</script>
