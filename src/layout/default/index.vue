<template>
  <div class="default-layout-container">
    <aside class="default-layout-aside" :class="{ 'basic-width': !isCollapse }">
      <Logo :isCollapse="isCollapse" />
      <Menu :isCollapse="isCollapse" class="default-layout-menu" />
    </aside>

    <div class="default-layout-main">
      <header class="default-layout-header">
        <i class="el-icon-s-fold header-icon" @click="toggleMenu"></i>
      </header>

      <main class="default-layout-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from './Logo.vue';
import Menu from './Menu.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    Logo,
    Menu,
  },
  setup() {
    const isCollapse = ref(false);
    function toggleMenu() {
      isCollapse.value = !isCollapse.value;
    }
    return {
      isCollapse,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.default-layout-container {
  height: 100%;
  display: flex;
}
.default-layout-aside {
  // flex: 0 0 200px;
  max-width: 200px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-right: 1px solid #eee;
}
.basic-width {
  flex-basis: 200px;
}

.default-layout-main {
  flex: auto;
}

.default-layout-menu {
  flex: auto;
}

.default-layout-header {
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  .header-icon {
    font-size: 20px;
    padding: 0 10px;
    height: 100%;
    line-height: 48px;
    cursor: pointer;
    &:hover {
      background: #f6f6f6;
    }
  }
}
.default-layout-content {
  box-sizing: border-box;
  padding: 20px;
}
</style>
