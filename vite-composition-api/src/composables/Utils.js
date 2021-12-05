import {ref} from "vue";

export default () => {
    const title = ref("Vue3 Script Setup")
    const counter = ref(0)
    const inc = () => counter.value++
    const dec = () => counter.value--
    const alertMe = (info) => console.log(info)
    return {title, counter, inc, dec, alertMe}
}