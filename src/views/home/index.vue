<template>
  <div>
    <h1>home页面</h1>
    <img
      src="@/assets/vue.svg"
      alt=""
    >
    <h3>{{ store.state.count }}</h3>
    <h4>{{ store.state.text }}</h4>
    <h1>{{ user }}</h1>
    <div class="box">
      我是标志
    </div>
  </div>
</template>

<script lang="ts" setup>
// import user from '../../api/user'
import user from '@/api/user'
import { useStore } from '../../store'
const store = useStore()
console.log(store.state)
</script>

<style scoped lang="scss">
//@import '@/styles/variables.scss';
  .box{
    width: 200px;
    height: 200px;
    color: $color;
    background: url("@/assets/vue.svg");
  }
</style>
