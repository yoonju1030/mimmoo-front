<template>
    <VCard>
        <VImg
        v-if="productType == '남성용'"
          :src="product1"
          contain
        />
        <VImg
        v-else
          :src="product2"
          contain
        />
        <VCardItem>
          <VCardTitle>{{productId}}</VCardTitle>
        </VCardItem>
        <VCardText>
            {{ productType }}
        </VCardText>
    </VCard>
</template>

<script setup>
import product1 from '@images/pages/product1.png';
import product2 from '@images/pages/product2.png';
const props = defineProps({
  productId: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  }
});
</script>
