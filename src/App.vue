<script setup>
import { RouterView } from 'vue-router'
import NavComp from './components/app/NavComp.vue';
import FooterComp from './components/app/FooterComp.vue';
import { onMounted } from 'vue';
import { useNotesStore } from './stores/notesStore';

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.getNotes()
})
</script>

<template>

  <div class="min-vh-100 d-flex flex-column">
    <NavComp />

    <main class="flex-fill py-2">
      <RouterView class="container" />
    </main>

    <FooterComp />
  </div>

</template>

<style scoped></style>
