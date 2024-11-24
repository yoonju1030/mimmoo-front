<script setup>
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
    <!-- <VerticalNavLink
    :item="{
      title: 'Home',
      icon: 'ri-home-smile-line',
      to: '/home'
    }"
  /> -->
  <VerticalNavGroup
    :item="{
      title: '편한발소개',
      icon: 'ri-home-smile-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: '인사말',
        to: '/introduce',
      }"
    />
    <VerticalNavLink
      :item="{
        title: '연혁',
        to: '/history'
      }"
    />

  </VerticalNavGroup>
  <VerticalNavLink
    :item="{
      title: '신발소개',
      icon: 'ri-home-smile-line',
      to: '/product'
    }"
  />
  <VerticalNavLink
    :item="{
      title: '신발특징',
      icon: 'ri-home-smile-line',
      to: '/feature'
    }"
  />
  <VerticalNavLink
    :item="{
      title: '가격표',
      icon: 'ri-home-smile-line',
      to: '/price'
    }"
  />
  <VerticalNavGroup
    :item="{
      title: '고객센터',
      icon: 'ri-home-smile-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: '공지사항',
        to: '/information',
      }"
    />
    <VerticalNavLink
      :item="{
        title: '문의게시판',
        to: '/ask',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'A/S센터',
        to: '/as',
      }"
    />
    <VerticalNavLink
      :item="{
        title: '체험사례',
        to: '/exp',
      }"
    />

  </VerticalNavGroup>
</template>
