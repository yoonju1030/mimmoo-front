<script setup>
import InfoTables from '@/views/pages/tables/InfoTables.vue';
import eCommerce2 from '@images/eCommerce/2.png';
import pages1 from '@images/pages/mainimage.png';


const navigationTab = ref('ITEM ONE')
const tabContent = 'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...'

const tabItems = [
  'ITEM ONE',
  'ITEM TWO',
  'ITEM THREE',
]
const totalProfit = {
  title: 'Total Profit',
  color: 'secondary',
  icon: 'ri-pie-chart-2-line',
  stats: '$25.6k',
  change: 42,
  subtitle: 'Weekly Project',
}

const newProject = {
  title: 'New Project',
  color: 'primary',
  icon: 'ri-file-word-2-line',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}
</script>

<template>
  <v-row>
    <v-col
      cols="12"
    >
      <VCard>
        <VImg
          :src="pages1"
          cover
        />

        <VCardItem>
          <VCardTitle>발은 제2의 심장전신의 축소판</VCardTitle>
        </VCardItem>

        <VCardText>
            발이 편해야 하루 일과가 편합니다.
        </VCardText>
      </VCard>
    </v-col>
</v-row>
<v-row align="stretch">
    <v-col
      cols="4"
      lg="4"
      md="6"
      style="display: flex; flex-direction: column;"
    >
      <VCard title="공지사항" style="flex: 1;">
        <InfoTables />
      </VCard>
    </v-col>

    <v-col
      cols="4"
      lg="4"
      md="6"
      style="display: flex; flex-direction: column;"
    >
      <VCard title="추천상품" style="flex: 1;">
        <v-carousel
        height="200"
        hide-delimiters>
            <v-carousel-item>
                <VCard>
                    <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                        <div class="ma-auto pa-5">
                        <VImg
                            width="137"
                            height="176"
                            :src="eCommerce2"
                        />
                        </div>
                    </div>
                </VCard>
            </v-carousel-item>
            <v-carousel-item>
                <VCard>
                    <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                        <div class="ma-auto pa-5">
                        <VImg
                            width="137"
                            height="176"
                            :src="eCommerce2"
                        />
                        </div>
                    </div>
                </VCard>
            </v-carousel-item>

            <v-carousel-item>
                <VCard>
                    <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
                        <div class="ma-auto pa-5">
                        <VImg
                            width="137"
                            height="176"
                            :src="eCommerce2"
                        />
                        </div>
                    </div>
                </VCard>
            </v-carousel-item>


           
        </v-carousel>

        <VCardActions>
          <VBtn>More</VBtn>
        </VCardActions>
      </VCard>
    </v-col>

    <v-col
      cols="4"
      lg="4"
      md="6"
      style="display: flex; flex-direction: column;"
    >
    <VCard class="text-center" style="flex: 1;">
        <VCardText class="d-flex flex-column justify-center align-center">
          <VAvatar
            color="primary"
            variant="outlined"
            size="50"
            class="mb-4"
          >
            <VIcon
              size="2rem"
              icon="ri-question-line"
            />
          </VAvatar>

          <h6 class="text-h6">
            고객센터
          </h6>
        </VCardText>

        <VCardText>
          <h4>Tel. 031-222-3333</h4>
          <h5>Fax. 031-444-5555</h5>
        </VCardText>

        <VCardText class="justify-center">
          <VBtn variant="elevated" style="margin-right:10px;">
            체험사례
          </VBtn>
          <VBtn variant="elevated" >
            문의게시판
          </VBtn>
          <VBtn variant="elevated" style="margin-left:10px;">
            A/S 안내
          </VBtn>
        </VCardText>
      </VCard>
    </v-col>
</v-row>
</template>
