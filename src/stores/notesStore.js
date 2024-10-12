import { createNote, deleteNote, fetchAllNotes, fetchSingleNote, updateNote } from "@/services/notes.service";
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

    // Eliminar nota
    const removeNotes = async (id) => {
        const isValid = await deleteNote(id)
        if (isValid) {
            notes.value = notes.value.filter(note => note._uuid !== id)
        }
    }

    // Editar nota
    const editNote = async (id, note) => {
        const updateNoteData = await updateNote(id, note)
        // if (updateNoteData) {
        //     const noteIndex = notes.value.findIndex(note => note._uuid === id)
        //     if (noteIndex !== -1) {
        //         notes.value[noteIndex] = note
        //     }
        // }

        if (updateNoteData) {
            notes.value = notes.value.map(note => {
                if (note._uuid === id) {
                    return { ...note, ...updateNoteData }
                }
                return note
            })
        }
    }

    // Leer solo una nota (local)
    const getLocalNote = (id) => {
        return notes.value.find(note => note._uuid === id)
    }

    // Leer solo una nota (desde api)
    const getNote = async (id) => {
        let noteData = getLocalNote(id)

        if (!noteData) {
            noteData = await fetchSingleNote(id)
        }

        return noteData
    }

    return {
        notes,
        notesCount,
        addNote,
        getNotes,
        removeNotes,
        editNote,
        getNote
    }
})