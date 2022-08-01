<template>
  <div>
    <h1>登陆</h1>
  </div>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'
onMounted(() => {
  getLoginInfo().then(res => {
    // 拿到响应式对象，是通过axios包装的
    console.log(res)
    console.log(res)
  })
})
</script>

<style scoped>

</style>
