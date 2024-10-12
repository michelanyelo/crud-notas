<script setup>
import NoteForm from '@/components/notes/NoteForm.vue';
import { useNotesStore } from '@/stores/notesStore';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const note = ref([])
const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()
const isEditing = computed(() => route.name === "editar-nota" && route.params.id)

onMounted(async () => {
    if (isEditing.value) {
        const noteData = await notesStore.getNote(route.params.id)
        if (noteData) {
            note.value = noteData
            console.log(noteData)
        } else {
            router.push({ name: 'not-found' })
        }
    }
})
</script>

<template>
    <div>
        <h1> {{ isEditing ? "Editar" : "Crear" }} nota </h1>
        <NoteForm :initialNote="note" />
    </div>
</template>

<style scoped></style>