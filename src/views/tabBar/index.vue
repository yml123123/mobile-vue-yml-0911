<template>
  <div>
    <router-view />
    <van-tabbar>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">视频</van-tabbar-item>
      <van-tabbar-item icon="friends-o">问答</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabBarIndex'
}
</script>

<style>

</style>
