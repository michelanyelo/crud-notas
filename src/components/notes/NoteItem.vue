<script setup>
const { note } = defineProps({
    note: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div>
        <div class="card" style="width: 20rem;">
            <div class="card-header" data-test="note-title">{{ note.title }}</div>
            <div class="card-body">
                <p class="card-text" data-test="note-content">{{ note.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>