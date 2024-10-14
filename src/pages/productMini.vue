<template>
    <VCard>
        <VImg
          :src="pages5"
          contain
        />
        <VCardItem>
          <VCardTitle>{{productId}}</VCardTitle>
        </VCardItem>
        <VCardText>
            남성용
        </VCardText>
    </VCard>
</template>

<script setup>
import pages5 from '@images/pages/5.jpg';
const props = defineProps({
  productId: {
    type: String,
    required: true
  }
});
</script>
