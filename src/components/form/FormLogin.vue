<template>
  <!-- ref 前不能加冒号 -->
  <el-form
    ref="formRef"
    :model="user"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="user.email" placeholder="Enter Email..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="user.password"
        type="password"
        placeholder="Enter Password..."
      />
    </el-form-item>

    <el-form-item>
      <el-button @click="handleLogin" type="primary" class="submit-btn">
        提交
      </el-button>
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useFormValid } from '@/hooks/useForm';

interface User {
  email: string;
  password: string;
}

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
}
export default {
  setup() {
    const router = useRouter();

    const user = reactive<User>({
      email: '1234567@qq.com',
      password: '123456',
    });

    const formRef = ref();
    const { validForm } = useFormValid(formRef);

    const rules = reactive<Rules>({
      email: [
        {
          type: 'email',
          message: 'Email is incorrect...',
          required: true,
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Password could not be empty...',
          trigger: 'blur',
        },
        {
          min: 6,
          max: 30,
          message: "Password's length has to be 6 to 30 characters...",
          trigger: 'blur',
        },
      ],
    });

    // 触发登录方法
    const handleLogin = async () => {
      const valid: boolean = await validForm();
      if (!valid) return;
      router.push({
        path: '/',
      });
    };

    return { user, rules, formRef, handleLogin };
  },
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
