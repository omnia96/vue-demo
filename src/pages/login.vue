<template>
  <div>
    <v-text-field
        :counter="10"
        label="First name"
        required
        color="red"
    ></v-text-field>
<!--    <v-snackbar :model-value="true"></v-snackbar>-->
  </div>
</template>
<script setup>
import {post} from "../core/utils/request";
import {getCurrentInstance} from "vue";
import Snackbar from "../core/utils/snackbar";

const { proxy } = getCurrentInstance()

// post("/api/user/getcode").then(data => {
//   console.log(data);
// });
// proxy.$toast({});
Snackbar.success();
</script>
