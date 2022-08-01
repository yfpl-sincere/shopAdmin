
<template>
  <h1>{{ props.msg }}</h1>
  <div class="card">
    <button
      type="button"
    >
      count is {{ props.count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >create-vue</a>, the official Vue + Vite starter
  </p>

  <p>
    Install
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
    in your IDE for a better DX
  </p>

  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
  <button @click="incrementChlid">
    点我+1
  </button>
</template>
<script lang="ts" setup>
import { onMounted, ref, defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    require: true,
    default: () => ''
  },
  count: {
    type: Number,
    require: true,
    default: () => 0
  }
})
const thisEmit = defineEmits(['increment'])
const incrementChlid = () => {
  thisEmit('increment')
}
const hello = ref('0')
onMounted(() => {
  console.log(hello.value)
})
</script>
<!--<script  lang="ts">-->
<!--import { defineComponent, onMounted, ref } from 'vue'-->

<!--// defineProps<{ msg: string }>()-->

<!--export default defineComponent({-->
<!--  name: 'HelloWorld',-->
<!--  props: {-->
<!--    msg: {-->
<!--      type: String,-->
<!--      require: true,-->
<!--      default: () => ''-->
<!--    },-->
<!--    count: {-->
<!--      type: Number,-->
<!--      require: true,-->
<!--      default: () => 0-->
<!--    }-->
<!--  },-->
<!--  setup () {-->
<!--    const hello = ref('0')-->
<!--    onMounted(() => {-->
<!--      console.log(hello.value)-->
<!--    })-->
<!--    return {-->
<!--      hello-->
<!--    }-->
<!--  }-->
<!--})-->

<!--</script>-->
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
