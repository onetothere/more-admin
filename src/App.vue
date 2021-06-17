<template>
  <component id="app" :is="currentLayout" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import * as layouts from '@/layout/index';

export default defineComponent({
  name: 'App',
  components: layouts,
  setup() {
    const route = useRoute();
    const currentLayout = computed(
      // @ts-ignore
      () => layouts[route.meta.layout] || 'default',
    );

    return {
      currentLayout,
    };
  },
});
</script>

<style>
#app {
  height: 100%;
}
</style>
