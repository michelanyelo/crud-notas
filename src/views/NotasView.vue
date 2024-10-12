<script setup>
import NoteItem from '@/components/notes/NoteItem.vue';

</script>

<template>
    <div>
        <h1>Notas View</h1>
        <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }">Agregar nueva nota</RouterLink>
        <NoteItem :note="{ title: 'nota de prueba', content: 'contenido de prueba' }" />
    </div>
</template>

<style scoped></style>