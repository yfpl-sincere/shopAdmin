
<template>
  <div>
    <a
      ref="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <p>{{ count }}</p>
    <button @click="increment">
      点击+1
    </button>
  </div>
  <HelloWorld
    :msg="helloTitle"
    :count="Number(123)"
    @increment="increment"
  />
  <jsxDemo />
  <router-view />
</template>

<!--<script  lang="ts">-->
<!--import { defineComponent } from 'vue'-->
<!--import HelloWorld from './components/HelloWorld.vue'-->

<!--export default defineComponent({-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  },-->
<!--  setup () {-->
<!--    const helloTitle:string = '我是子组件'-->
<!--    return {-->
<!--      helloTitle-->
<!--    }-->
<!--  }-->
<!--})-->
<!--</script>-->
<script lang="ts" setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import jsxDemo from './components/jsx-demo.vue'

const helloTitle:string = '我是子组件'
const count = ref(100)
const increment = () => {
  count.value++
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
