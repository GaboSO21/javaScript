import mongoose from "mongoose";

// Schema creation for documents, structure 
const personaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    primerApellido: {
        type: String,
        required: true
    },
    segundoApellido: {
        type: String,
        required: true
    },
    profesion: {
        type: String
    }
})

// Export Persona model
export default mongoose.model('Persona', personaSchema);




















