import axios from "axios"

// Peticiones
const api = axios.create({
    baseURL: "https://crudapi.co.uk/api/v1/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`
    }
})

// Crear nota
export const createNote = async (newNote) => {
    try {
        const response = await api.post("/notes", [newNote])

        const newNoteData = response.data.items[0]

        return newNoteData

    } catch (error) {
        console.error("Error al crear nota:", error)
    }
}

// Leer todas las notas
export const fetchAllNotes = async () => {
    try {
        const response = await api.get("/notes")

        return response.data.items
    } catch (error) {
        console.error(error)
    }
}

// Eliminar una nota
export const deleteNote = async (id) => {
    try {
        await api.delete(`/notes/${id}`)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

// Editar una nota
export const updateNote = async (id, form) => {
    try {
        const response = await api.put(`/notes/${id}`, form)
        return response.data
    } catch (error) {
        console.error(error)
    }
}