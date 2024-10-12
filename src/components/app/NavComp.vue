<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">Navbar</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <RouterLink active-class="active" class="nav-link" aria-current="page" :to="{ name: 'home' }">Home
                    </RouterLink>
                    <RouterLink active-class="active" class="nav-link" :to="{ name: 'notas' }">Notas</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>