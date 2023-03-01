import('colors');
import { guardarDB, leerDB } from "./helpers/guardarArchivo.js";
import { confirmar, inquireMenu, leerInput, listadoTareasBorrar, mostrarListadoChecklist, pausa } from "./helpers/inquire.js";
import { Tareas } from "./models/tareas.js";
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareas(tareasDB);
  }

  do {

    opt = await inquireMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput('Descripcion');
        tareas.crearTarea(desc);
        guardarDB(tareas.listadoArr);
        break;
      case 2:
        tareas.listadoCompleto();
        break;
      case 3:
        tareas.listPendientesCompletadas(true);
        break;
      case 4:
        tareas.listPendientesCompletadas(false);
        break;
      case 5:
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case 6:
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirmar('Esta seguro?');
          if (!ok) {
            tareas.borrarTarea(id);
            guardarDB(tareas.listadoArr);
          }
        }
        break;
    }

    await pausa();

  } while (opt !== 0);

}

main();

