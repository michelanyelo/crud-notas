<script setup>
import { ref } from 'vue';
import { useNotesStore } from '@/stores/notesStore';
import router from '@/router';

const noteData = ref({
    title: "",
    content: ""
})

const notesStore = useNotesStore()

const handleSubmit = async () => {
    const isValid = noteData.value.title.trim() && noteData.value.content.trim()
    if (!isValid) {
        alert("Todos los campos son requeridos")
        return
    }

    const response = await notesStore.addNote(noteData.value)

    if (response) {
        router.push({ name: "notas" })
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="title">Titulo</label>
                <input class="form-control" type="text" id="title" placeholder="Titulo de la nota" required
                    v-model="noteData.title">
            </div>

            <div class="mb-3">
                <label for="content">Contenido</label>
                <textarea class="form-control" id="content" placeholder="Contenido de la nota" required
                    v-model="noteData.content"></textarea>
            </div>

            <button class="btn btn-success" type="submit">Publicar</button>
        </form>
    </div>
</template>

<style scoped></style>