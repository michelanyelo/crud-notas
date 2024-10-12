<script setup>
import NoteItem from '@/components/notes/NoteItem.vue';

</script>

<template>
    <div>
        <h1>Estas son mis notas</h1>
        <NoteItem :note="{ title: 'nota de prueba', content: 'contenido de prueba' }" />
    </div>
</template>

<style scoped></style>