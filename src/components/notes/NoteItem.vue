<script setup>
import { useNotesStore } from '@/stores/notesStore';

const { note } = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const notesStore = useNotesStore()
</script>

<template>
    <div>
        <div class="card" style="width: 20rem;">
            <div class="card-header d-flex" data-test="note-title">
                <h3 class="flex-fill fw-bold fs-3">{{ note.title }}</h3>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink class="dropdown-item" :to="{ name: 'editar-nota', params: { id: note._uuid } }">
                                Editar</RouterLink>
                        </li>
                        <li>
                            <a class="dropdown-item text-danger" @click="notesStore.removeNotes(note._uuid)">
                                Eliminar
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text" data-test="note-content">{{ note.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>