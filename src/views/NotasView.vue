<script setup>
import NoteList from '@/components/notes/NoteList.vue';
</script>

<template>
    <div>
        <h1>Mis notas</h1>
        <RouterLink class="btn btn-success my-3" :to="{ name: 'nueva-nota' }">Agregar nueva nota</RouterLink>
        <NoteList />
    </div>
</template>

<style scoped></style>