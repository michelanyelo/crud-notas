import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNotesStore = defineStore("notes", () => {

    const notes = ref([])
    const notesCount = computed(() => notes.value.length || 0)

    return {
        notes,
        notesCount
    }
})