<script setup>
import { RouterView } from 'vue-router'
import NavComp from './components/app/NavComp.vue';
import FooterComp from './components/app/FooterComp.vue';
</script>

<template>

  <div class="min-vh-100 d-flex flex-column">
    <NavComp />

    <RouterView class="flex-fill" />

    <FooterComp />
  </div>

</template>

<style scoped></style>
