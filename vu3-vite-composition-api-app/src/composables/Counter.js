import {computed, ref, watch} from "vue";

export default function (){
    const counter = ref(0)
    const oddOrEven = computed(() => counter.value % 2 === 0 ? "Çift" : "Tek")
    watch([counter, oddOrEven], ([newCounter, newOddOrEven], [oldCounter, oldOddOrEven]) => {
        console.log(newCounter, oldCounter)
        console.log(newOddOrEven, oldOddOrEven)
    })
    return{counter,oddOrEven}
}