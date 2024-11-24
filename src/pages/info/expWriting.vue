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
  <v-card>
    <v-container>
        <v-text-field
            color="deep-purple"
            label="제목"
            variant="filled"
        ></v-text-field>
    </v-container>
    <v-container>
      <v-text-field
        color="deep-purple"
        label="글쓴이"
        variant="filled"
      ></v-text-field>
    </v-container>
    <v-container>
      <v-textarea
        color="deep-purple"
        label="내용"
        variant="filled"
        auto-grow
      ></v-textarea>
    </v-container>

    <v-container>
        <v-file-input label="File input"></v-file-input>
    </v-container>
  </v-card>
  <br/>
  <VRow>
    <VCol>
    <span class="font-weight-black" style="float: right;">
        <VBtn @click="moveInformtion">목록</VBtn>
        <VBtn style="margin-left:10px;" @click="moveInformtion">작성</VBtn>
    </span>
  </VCol>
  </VRow>
</template>
