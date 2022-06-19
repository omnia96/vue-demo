<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary"></v-app-bar>
      <router-view></router-view>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
