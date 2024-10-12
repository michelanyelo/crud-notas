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
        <div class="note-item">
            <div class="note-item__header d-flex" data-test="note-title">
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
                            <button class="dropdown-item text-danger" @click="notesStore.removeNotes(note._uuid)">
                                Eliminar
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="note-item__body">
                <p class="note-item__content" data-test="note-content">{{ note.content }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.note-item {
    border: 1px solid $color-light;
    box-shadow: 0 0 10px $color-dark;
    background-color: $color-light;
    border-radius: $main-border-radius;

    &__header {
        display: flex;
        background-color: $color-main-bg;
        padding: .3rem;
        border-radius: $main-border-radius $main-border-radius 0 0;
    }

    &__body {
        padding: 2rem 1rem;
    }
}
</style>