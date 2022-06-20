<template>
  <v-app>
    <v-app-bar color="primary"></v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div class="tab-bar">
      <v-bottom-navigation v-model="value" color="primary" bg-color="white">
        <div class="tab-bar-content">
          <template v-for="(item, index) in tabs">
            <v-btn :value="item.value" @click="tabChange(item.value)">
              <div class="tab-bar-item">
                <v-icon>{{item.icon}}</v-icon>
                <span>{{item.label}}</span>
              </div>
            </v-btn>
          </template>
        </div>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>
<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const value = ref(useRouter().currentRoute.value.name);
console.log(useRoute(), useRouter());
console.log();
const tabs = ref([
  {label: '首页', value: 'home', icon: 'mdi-home'},
  {label: '关于', value: 'about', icon: 'mdi-heart'},
]);
const tabChange = (val) => {
  router.push({name: val});
};

</script>
<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  &-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &-item {
    display: flex;
    flex-direction: column;
  }
}
</style>
