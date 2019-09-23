<template>
<div>
<van-nav-bar title="登陆"  left-arrow>
</van-nav-bar>
<!-- //手机号部分 -->
<!-- <van-cell-group>
  <van-field
    v-model="use.mobile"
    required
    clearable
    label="手机号"
    placeholder="请输入用户名"
     />

  <van-field
    v-model="use.code"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group> -->
<ValidationObserver tag="form" ref="loginForm">
      <!--
        把需要验证的字段使用 ValidationProvider 包裹起来
        在其上面配置对应的验证规则等信息
       -->
      <ValidationProvider tag="div" name="手机号" rules="required|phone" v-slot="{ errors }">
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errors[0]"
        />
      </ValidationProvider>
      <ValidationProvider tag="div" name="验证码" rules="required" v-slot="{ errors }">
        <van-field
          v-model="user.code"
          type="password"
          label="验证码"
          placeholder="请输入验证码"
          required
          :error-message="errors[0]"
        />
      </ValidationProvider>
    </ValidationObserver>

<!-- 信息按钮 -->

<van-button type="info" @click="onLogin" :loading="isLoginLoading" >
 登陆</van-button>
</div>
</template>

<script>
// import request from '@/utils/request'
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '15201230123',
        code: '246810'
      },
      isLoginLoading: false
    }
  },
  methods: {
    async onLogin () {
      // 获取表单数据
      // 发送请求
      try {
        // 表单验证
        const isValid = await this.$refs.loginForm.validate()

        // 验证失败，则什么都不做
        if (!isValid) {
          return
        }

        // 验证通过，提交表单
        this.isLoginLoading = true
        const res = await login(this.user)

        this.$store.commit('setUser', res.data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }

      // 无论登录成功与否，都停止 loading
      this.isLoginLoading = false
    }
  }

}
</script>

<style lang='less' scoped>
    .van-button {
        width: 100%
    }
</style>
