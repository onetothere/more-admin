<template>
  <el-menu
    class="menu"
    router
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <component
      v-for="item in routeList"
      :key="item.path"
      :data="item"
      :is="item.children?.length ? 'SubMenu' : 'MenuItem'"
    />
  </el-menu>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { LayoutRoutes } from '@/router/index';
import SubMenu from './SubMenu.vue';
import MenuItem from './MenuItem.vue';
export default defineComponent({
  name: 'Menu',
  components: { SubMenu, MenuItem },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    console.log('props: ', props);
    const router = useRouter();
    console.log('router: ', router);
    console.log('routers: ', LayoutRoutes);
    const routeList = computed(() => {
      return LayoutRoutes.filter((item) => !item.meta?.hidden);
    });
    return {
      routeList,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  border-right: none;
  width: 100%;
}
</style>
