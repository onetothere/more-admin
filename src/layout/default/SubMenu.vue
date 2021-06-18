<template>
  <el-submenu :index="data.path">
    <template #title>
      <i :class="data.meta?.icon || 'el-icon-message'"></i>
      <span>{{ data.meta?.title || data.path }}</span>
    </template>
    <el-menu-item-group>
      <component
        v-for="item in data.children"
        :key="item.path"
        :data="item"
        :is="item.children?.length ? 'SubMenu' : 'MenuItem'"
      />
    </el-menu-item-group>
  </el-submenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from './MenuItem.vue';
export default defineComponent({
  name: 'SubMenu',
  components: { MenuItem },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
