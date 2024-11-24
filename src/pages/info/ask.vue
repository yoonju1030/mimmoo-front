<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter()
  const items = [
    {
      "id": 123,
      "제목": '문의드립니다.',
      "글쓴이": '이윤주',
      "날짜": '2024-11-09 23:07',
      "조회": 1000,
    },
  ]

  const clickDetail = (item, event) => {
    console.log(item)
    router.push({path: `/ask/${event.item.id}`})
  }
</script>

<template>
<h1>공지사항</h1>
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
</template>
