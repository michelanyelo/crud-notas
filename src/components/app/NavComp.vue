<script setup>
import { useNotesStore } from '@/stores/notesStore';
import { RouterLink } from 'vue-router';

const notesStore = useNotesStore()
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">Inicio</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <RouterLink active-class="active" class="nav-link" aria-current="page" :to="{ name: 'home' }">Inicio
                    </RouterLink>
                    <RouterLink active-class="active" class="nav-link" :to="{ name: 'notas' }">Mis notas ({{
                        notesStore.notesCount }})</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>