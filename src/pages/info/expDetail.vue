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
    router.push('/exp')
}
</script>

<template>
  <h1>체험사례</h1>
<br/>
  <v-card
  subtitle="2024-11-09 23:07">
    <template v-slot:title>
      <span class="font-weight-black">체험사례.</span>
      <span class="font-weight-black" style="float: right;">
          <v-btn @click="moveInformtion">목록</v-btn>
      </span>
    </template>

    <v-card-text class="">
      안녕하세요<br/>
      저는 박진우 입니다.<br/>
      아주 좋은것 같습니다.<br/>
    </v-card-text>
  </v-card>
</template>
