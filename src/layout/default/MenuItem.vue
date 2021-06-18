<template>
  <el-menu-item :index="data.path">
    <i :class="data.meta?.icon || 'el-icon-message'"></i>
    <template #title>
      <span>{{ data.meta?.title || data.path }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuItem',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
