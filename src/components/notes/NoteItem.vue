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
            <div class="card-header d-flex" data-test="note-title">
                <h3 class="flex-fill fw-bold fs-3">{{ note.title }}</h3>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        ...
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
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