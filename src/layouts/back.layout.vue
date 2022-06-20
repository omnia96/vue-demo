<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
          <v-btn icon @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <v-app-bar-title>Photos</v-app-bar-title>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script setup></script>
