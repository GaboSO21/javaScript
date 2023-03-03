import { actualizarPersona, borrarPersona, crearPersona, listarPersonas, retornarPersonas } from './dao/PersonaDao.js';
import { connectDB, disconnectDB } from './db/config.js';
import { inquireMenu, pausa, leerInput, confirmar, listadoPersonas } from './helpers/inquire.js';

const main = async () => {
    // Connect to database
    await connectDB()
        .then(() => console.log('Conectado a DB'))
        .catch(err => console.log(err));

    let opt = 0;

    do {

        opt = await inquireMenu();

        await pausa();

        switch (opt) {
            case 1:
                console.log();
                await crearPersona(await leerInput('Ingrese el nombre:'),
                    await leerInput('Ingrese la cedula:'),
                    await leerInput('Ingrese el segundo apellido:'),
                    await leerInput('Ingrese el segundo apellido:'))
                    .then(() => console.log(`\n Persona creada con ${'EXITO'.magenta}\n`))
                    .catch(err => console.log(err));
                await pausa();
                break;
            case 2:
                await listarPersonas();
                await pausa();
                break;
            case 3:
                const id = await listadoPersonas(await retornarPersonas());
                if (id !== 0) {
                    await actualizarPersona(id,
                        await leerInput('Ingrese el nuevo nombre:'),
                        await leerInput('Ingrese la nueva cedula:'),
                        await leerInput('Ingrese el nuevo primer apellido:'),
                        await leerInput('Ingrese el nuevo segundo apellido:')
                    )
                    await pausa();
                    break;
                }
                await pausa();
                break;
            case 4:
                const _id = await listadoPersonas(await retornarPersonas());
                if (_id !== 0) {
                    await confirmar('Esta seguro?');
                    await borrarPersona(_id)
                        .then(() => console.log('Persona borrada'))
                        .catch(err => console.log(err));
                    await pausa();
                    break;
                }
                await pausa();
                break;
        }

    } while (opt !== 0);

    // Disconnect from database
    await disconnectDB()
        .catch(err => console.log(err));

}

main().catch(err => console.log(err));



































