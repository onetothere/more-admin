<template>
  <div class="logo-container">
    <img class="logo" :src="logo" alt="logo" />
    <h1 class="title">More Admin</h1>
  </div>
</template>

<script lang="ts">
import logo from '@/assets/image/head.png';
export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: 56px;
}

.title {
  margin: 0;
  margin-left: 10px;
  font-size: 18px;
}
.logo {
  height: 40px;
  width: 40px;
}
</style>
