<template>
  <div class="default-layout-container">
    <aside class="default-layout-aside">
      <Logo />
      <Menu class="default-layout-menu" />
    </aside>

    <div class="default-layout-main">
      <header class="default-layout-header">
        <i class="el-icon-s-fold header-icon" style="margin-right: 15px"></i>
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
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Logo,
    Menu,
  },
});
</script>

<style lang="scss" scoped>
.default-layout-container {
  height: 100%;
  display: flex;
}
.default-layout-aside {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-right: 1px solid #eee;
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
