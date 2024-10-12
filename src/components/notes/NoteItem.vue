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
            <div class="card-header">{{ note.title }}</div>
            <div class="card-body">
                <p class="card-text">{{ note.content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>