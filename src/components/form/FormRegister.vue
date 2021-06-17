<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="registerUser.name" placeholder="Enter UserName..." />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerUser.email" placeholder="Enter Email..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      />
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin" />
        <el-option label="用户" value="user" />
        <el-option label="游客" value="visitor" />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance, reactive } from 'vue';
// import axios from 'axios' // 仅限在当前组件使用

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}

interface RegisterRules {
  name: (
    | {
        message: string;
        required: boolean;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
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
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  password2: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
    | {
        validator: (rule: RegisterRules, value: string, callback: any) => void;
        trigger: string;
      }
  )[];
}

export default {
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    const registerUser = reactive<RegisterUser>({
      name: '',
      email: '',
      password: '',
      password2: '',
      role: '',
    });

    const validatePass2 = (
      rule: RegisterRules,
      value: string,
      callback: any,
    ) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== registerUser.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    const registerRules = reactive<RegisterRules>({
      name: [
        {
          message: '用户名不能为空...',
          required: true,
          trigger: 'blur',
        },
        {
          min: 2,
          max: 30,
          message: '长度在2到30个字符',
          trigger: 'blur',
        },
      ],
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
      password2: [
        {
          required: true,
          message: 'Password2 could not be empty...',
          trigger: 'blur',
        },
        {
          min: 6,
          max: 30,
          message: "Password's length has to be 6 to 30 characters...",
          trigger: 'blur',
        },
        { validator: validatePass2, trigger: 'blur' },
      ],
    });

    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    };

    return { handleRegister, registerUser, registerRules };
  },
};
</script>
<style scoped></style>
