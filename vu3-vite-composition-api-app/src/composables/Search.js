import {ref, watchEffect} from "vue";

export default function () {
    const searchText = ref('')
    const isTyping = ref(false)
    // watch(searchText, () => {
    //   console.log(searchText.value.length)
    //   searchText.value.length > 0 ? isTyping.value = true : isTyping.value = false
    //   setTimeout(()=>{
    //     isTyping.value =false
    //   },1500)
    // })
    const stop = watchEffect((onInvalidate) => {
        console.log(searchText.value.length)
        searchText.value.length > 0 ? isTyping.value = true : isTyping.value = false

        const typing = setTimeout(() => {
            isTyping.value = false
            // stop() // watchEffect durdurmak için kulanılır
        }, 1500)
        onInvalidate(() => clearTimeout(typing))
    })
    return {searchText, isTyping, stop}
}