<template>
  <div class="box-container">
    <div
      v-for="item in homeRoutes"
      :key="item.path"
      class="item"
      @click="toRoutePath(item)"
    >
      {{ item.name }}
    </div>
    <i></i><i></i><i></i><i></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import homeRoutes from '@/router/home';
import { useRouter } from 'vue-router';
import { getUserInfo } from '@/api/user';

export default defineComponent({
  setup(props, context) {
    const router = useRouter();

    console.log('context: ', context);

    console.log('props: ', props);
    onMounted(async () => {
      console.log(import.meta.env, 'import.meta.env');
      const data = await getUserInfo();
      console.log('data: ', data);
    });
    function toRoutePath(item: any) {
      router.push({
        path: item.path,
      });
    }
    return {
      homeRoutes,
      toRoutePath,
    };
  },
});
</script>

<style scoped lang="scss">
.box-container {
  width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  i {
    flex: 0 0 220px;
  }
}
.item {
  flex: 0 0 220px;
  height: 220px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0px 1px 7px 0px rgba(231, 231, 231, 0.5);
}
</style>
