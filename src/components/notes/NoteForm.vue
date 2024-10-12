<script setup>
import { ref, watch } from 'vue';
import { useNotesStore } from '@/stores/notesStore';
import router from '@/router';

const noteData = ref({
    title: "",
    content: ""
});

// Actualizar datos de una nota existente
const props = defineProps({
    initialNote: {
        type: Object,
    }
});

watch(
    () => props.initialNote,
    ({ title, content }) => {
        noteData.value = { title, content }
    },
    { immediate: true } // Para que también reaccione en el montaje inicial
);

// Fin actualizar 

const notesStore = useNotesStore();

const handleSubmit = async () => {
    // Validar siempre los campos
    const inputsAreValid = noteData.value.title.trim() && noteData.value.content.trim()
    if (!inputsAreValid) {
        // validacion basica de campos
        alert("Por favor, rellene todos los campos")
        return
    }

    const response = props.initialNote ?
        await notesStore.editNote(props.initialNote._uuid, noteData.value) :
        await notesStore.addNote(noteData.value)

    // redireccionar al guardar
    if (response) {
        router.push({ name: 'notas' })
    }
};
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="title">Titulo</label>
                <input class="form-control" type="text" id="title" placeholder="Titulo de la nota"
                    v-model="noteData.title" required />
            </div>

            <div class="mb-3">
                <label for="content">Contenido</label>
                <textarea class="form-control" id="content" placeholder="Contenido de la nota"
                    v-model="noteData.content" required></textarea>
            </div>

            <button class="btn btn-success" type="submit">Publicar</button>
        </form>
    </div>
</template>

<style scoped></style>
