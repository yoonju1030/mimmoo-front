<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
const route= useRoute()
const router = useRouter()
const id = ref("")
onMounted(() => {
    id.value = route.path.split("/")[2]
    console.log(id)
})


const moveInformtion = () => {
    router.push('/ask')
}
</script>

<template>
  <h1>문의게시판</h1>
<br/>
  <v-card
  subtitle="2024-11-09 23:07">
    <template v-slot:title>
      <span class="font-weight-black">문의드립니다.</span>
      <span class="font-weight-black" style="float: right;">
          <v-btn @click="moveInformtion">목록</v-btn>
      </span>
    </template>

    <v-card-text class="">
      안녕하세요<br/>
      저는 이윤주 입니다.<br/>
      신발 구매하고 싶은데 구매 방법 문의드립니다.<br/>
    </v-card-text>
  </v-card>
</template>
