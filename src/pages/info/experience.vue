<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter()
  const items = [
    {
      "id": 123,
      "제목": '체험사례.',
      "글쓴이": '박진우',
      "날짜": '2024-11-09 23:07',
      "조회": 1000,
    },
  ]

  const clickDetail = (item, event) => {
    console.log(item)
    router.push({path: `/exp/${event.item.id}`})
  }

  const moveInformtion = () => {
    router.push('/expWriting')
}
</script>

<template>
<h1>체험사례</h1>
<br/>
  <VRow>
    <VCol
      cols="12"
    >
    <VCard>
      <v-data-table 
      :items="items"
      @click:row="clickDetail"
      ></v-data-table>
    </VCard>
    </VCol>
  </VRow>
  <VRow>
    <VCol>
    <span class="font-weight-black" style="float: right;">
        <v-btn @click="moveInformtion">글쓰기</v-btn>
    </span>
  </VCol>
  </VRow>
</template>
