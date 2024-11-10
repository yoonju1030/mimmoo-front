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
    router.push('/information')
}
</script>

<template>
  <h1>공지사항</h1>
<br/>
  <v-card
  subtitle="2024-11-09 23:07">
    <template v-slot:title>
      <span class="font-weight-black">밈무메디칼 홈페이지 방문을 환영합니다.</span>
      <span class="font-weight-black" style="float: right;">
          <v-btn @click="moveInformtion">목록</v-btn>
      </span>
    </template>

    <v-card-text class="">
      밈ㅁ메디칼 홈페이지 방문을 환영합니다.<br/>
      항상 최선을 다하고 노력하는 밈무메디칼이 되겠습니다.<br/>
      많은 성원과 관심 부탁드립니다. 감사합니다.<br/>
    </v-card-text>
  </v-card>
</template>
