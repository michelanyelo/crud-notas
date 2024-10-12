import { createNote, deleteNote, fetchAllNotes } from "@/services/notes.service";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNotesStore = defineStore("notes", () => {

    const notes = ref([])

    const notesCount = computed(() => notes.value.length || 0)

    // Crear nota
    const addNote = async (note) => {
        const newNoteData = await createNote(note)

        if (newNoteData) {
            notes.value.unshift(newNoteData)
        }

        return newNoteData
    }

    // Leer notas
    const getNotes = async () => {
        const notesData = await fetchAllNotes()
        if (notesData) {
            notes.value = notesData
        }
    }

    // Eliminar notas
    const removeNotes = async (id) => {
        const isValid = await deleteNote(id)
        if (isValid) {
            notes.value = notes.value.filter(note => note._uuid !== id)
        }
    }

    return {
        notes,
        notesCount,
        addNote,
        getNotes,
        removeNotes
    }
})