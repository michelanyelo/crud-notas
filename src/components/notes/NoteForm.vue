<script setup>
import { ref } from 'vue';

const noteData = ref({
    title: "",
    content: ""
})

const handleSubmit = () => {
    alert("submit")
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