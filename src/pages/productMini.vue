<template>
    <VCard>
        <VImg
        @click="clickProduct(productType, productId)"
        v-if="productType == '남성용'"
          :src="product1"
          contain
        />
        <VImg
        @click="clickProduct(productType, productId)"
        v-else
          :src="product2"
          contain
        />
        <VCardItem>
          <VCardTitle>
            {{productId}}
            <span class="font-weight-black" style="float: right;">
              <VBtn >구매</VBtn>
            </span>
          </VCardTitle>
        </VCardItem>
        <VCardText>
            {{ productPrice }}
            
        </VCardText>
    </VCard>
</template>

<script setup>
import product2 from '@images/pages/product2.png';
import product1 from '@images/pages/product3.png';
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps({
  productId: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  productPrice: {
    type: String,
    required: true
  }
});
const clickProduct = (productType, productId) => {
    let g = "w";
    if (productType === "남성용") {
        g="m"
    }
    router.push({path: `/product/${productId}${g}`})
}
</script>
