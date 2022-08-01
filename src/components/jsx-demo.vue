<template>
  <h1>jsx组件</h1>
  <abc />
  <Foo msg="hello-jsx选项式API" />
</template>

<script lang="tsx" setup>
import Foo from './foo.tsx'
// export default {
//   name: "jsx-demo"
// }
const abc = <h1>abc</h1>
</script>

<style scoped>

</style>
