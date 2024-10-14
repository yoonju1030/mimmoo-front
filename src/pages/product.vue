<script setup>
import { useRouter } from "vue-router";
import productMiniVue from './productMini.vue';
const router = useRouter()
const productList = [
    "MDM01", "MDM02", "MDM03", 
    "MDM04", "MDM05", "MDM06", 
    "MDM07", "MDM08", "MDM09", 
    "MDM10", "MDM11", "MDM12"
]

const clickProduct = (id) => {
    router.push({path: `/product/${id}`})
}

</script>

<template> 
    <h1>
        상품 소개
    </h1>
    <br/>

    <VRow class="match-height">
        <VCol
            cols="12"
            sm="2"
            v-for="id in productList"
            :key="id"
            @click="clickProduct(id)"
        >
            <productMiniVue v-bind:productId="id"/>
        </VCol>
    </VRow>
</template>
