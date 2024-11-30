<script setup>
import product2 from '@images/pages/product2.png';
import product1 from '@images/pages/product3.png';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";

const route= useRoute()
const router = useRouter()
const id = ref("")
const type = ref("여성용")
const product = ref(product2)
onMounted(() => {
    let str = route.path.split("/")[2]
    id.value = str.slice(0, str.length-1)
    let rawType = str.charAt(str.length-1)
    if (rawType === "m") {
        type.value="남성용"
        product.value = product1
    }
})
const moveProduct = () => {
    router.push('/product')
}

</script>

<template> 
    <h1>
        상품 소개
    </h1>
    <br/>
    <VCard>
        <VCardTitle>
            <span class="text-h2 font-weight-medium">{{ id }}</span>
            <span class="text-h2 font-weight-medium" style="float: right;">
                <v-btn @click="moveProduct">목록</v-btn>
            </span>
        </VCardTitle>
        <VCardText>
            {{type}}
        </VCardText>
        <br/>
        <VRow>
            <VCol 
            col="12"
            sm="3">
            </VCol>
            <VCol 
            col="12"
            sm="6"><VImg :src="product" />
            </VCol>
        </VRow>
        <VRow>
            <VCol 
            col="12"
            sm="3">
            </VCol>
            <VCol 
            col="12"
            sm="6"><VImg :src="product" />
            </VCol>
        </VRow>
        <VRow>
            <VCol 
            col="12"
            sm="3">
            </VCol>
            <VCol 
            col="12"
            sm="6"><VImg :src="product" />
            </VCol>
        </VRow>
        <br/>
    </VCard>
</template>
