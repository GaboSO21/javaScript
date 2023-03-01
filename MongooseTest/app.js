const mongoose = require('mongoose');

const main = async () => {
    // Connect to database
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // Create schema for documents
    const personaSchema = new mongoose.Schema({
        name: String,
        cedula: String
    })

    // Create collection with previous schema
    const Persona = mongoose.model('Persona', personaSchema);

    // Create new object 
    const juan = new Persona({
        name: 'Juan',
        cedula: '305430692'
    })
    console.log(juan.cedula);

    // Save created object to document
    await juan.save();

    // db.comidas.find();
    const personas = await Persona.find();
    console.log(personas);

}

main().catch(err => console.log(err));



































