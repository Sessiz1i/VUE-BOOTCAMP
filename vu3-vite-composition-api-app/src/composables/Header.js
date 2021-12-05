import {computed, ref} from "vue";

export default  function (){
    const title = ref("Bu bir setup() title")
    const titleLength = computed(() => title.value.length + " Adet Karakter Yazdınız")
    return{title,titleLength}
}