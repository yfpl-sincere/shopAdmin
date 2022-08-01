// export default () => {
//   return (
//         <div>
//             <h1>foo 函数式组件</h1>
//         </div>
//   )
// }
import { defineComponent, ref } from 'vue'
// 这里可以用选项式API
// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       require: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },
//   render () {
//     return (
//         <div>
//           <div>{this.msg}</div>
//           <h2>{this.count}</h2>
//         </div>
//     )
//   }
// })
interface PropsType{
  msg: string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props:PropsType) => (
      <div>
        <p>{props.msg}</p>
        <p>{count.value}</p>
      </div>
    )
  }
})
