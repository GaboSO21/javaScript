import { Tarea } from "./tarea.js";
import colors from 'colors';

export class Tareas {

  _listado = {};

  get listadoArr() {

    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;

  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareas(tareas = []) {

    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })

  }

  crearTarea(desc = '') {

    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;

  }

  listadoCompleto() {

    Object.keys(this._listado).forEach((key, i) => {
      if (this._listado[key].completadoEn === null) {
        console.log(`${colors.green(i + 1)}. ${this._listado[key].desc} :: ${colors.red('Pendiente')}`);
      } else {
        console.log(`${colors.green(i + 1)}. ${this._listado[key].desc} :: ${colors.green('Completada')}`);
      }
    })

  }

  listPendientesCompletadas(completadas) {

    Object.keys(this._listado).forEach((key, i) => {
      if (completadas && this._listado[key].completadoEn !== null) {
        console.log(`${colors.green(i + 1)}. ${this._listado[key].desc} :: ${colors.green('Completada')}`);
      } else if (!completadas && this._listado[key].completadoEn === null) {
        console.log(`${colors.red(i + 1)}. ${this._listado[key].desc} :: ${colors.red('Pendiente')}`);
      }
    })

  }

}










