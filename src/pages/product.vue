<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import productMiniVue from './productMini.vue';
const router = useRouter()
const search = ref("")
const targetList = ref([])
const productList = [
    {id:"MDM01", type: "남성용", price: "440,000원"}, 
    {id:"MDM02", type: "여성용", price: "400,000원"}, 
    // {id:"MDM03", type: "여성용"},  
    // {id:"MDM04", type: "남성용"}, 
    // {id:"MDM05", type: "남성용"}, 
    // {id:"MDM06", type: "여성용"}, 
    // {id:"MDM07", type: "여성용"}, 
    // {id:"MDM08", type: "남성용"}, 
    // {id:"MDM09", type: "남성용"}, 
    // {id:"MDM10", type: "여성용"}, 
    // {id:"MDM11", type: "여성용"}, 
    // {id:"MDM12", type: "남성용"}, 
]
onMounted(() => {
    targetList.value = productList
})


const clickProduct = (p) => {
    let g = "w";
    if (p.type === "남성용") {
        g="m"
    }
    router.push({path: `/product/${p.id}${g}`})
}

const required = (v) => {
    targetList.value = productList.filter((p) => p.id.indexOf(v)>-1)
    return true
}

</script>

<template> 
    <h1>
        상품 소개
    </h1>
    <br/>

      <v-text-field
        v-model="search"
        :rules="[required]"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="상품 검색"
        variant="solo"
        single-line
      ></v-text-field>
      <br/>

    <VRow class="match-height">
        <VCol
            cols="12"
            sm="3"
            v-for="p in targetList"
            :key="p"
        >
            <productMiniVue :productId="p.id" :productType="p.type" :productPrice="p.price"/>
        </VCol>
    </VRow>
</template>
