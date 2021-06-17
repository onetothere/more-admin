<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {},
});
</script>

<style>
#app {
  height: 100%;
}
</style>
