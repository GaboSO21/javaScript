const empleados = [
  {
    id: 1,
    nombre: 'Gabriel'
  },
  {
    id: 2,
    nombre: 'Karen'
  },
  {
    id: 3,
    nombre: 'Luisa'
  }
];
const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];

const getEmpleado = (id) => {


  return new Promise((resolve, reject) => {

    const empleado = empleados.find((e) => {
      return e.id === id;
    })

    if (empleado) {
      resolve(empleado);
    } else {
      reject(`No existe empleado con id ${id}`);
    }

  });

}

const getSalario = (id) => {

  return new Promise((resolve, reject) => {

    const salario = salarios.find(s => s.id === id)?.salario;

    if (salario) {
      resolve(salario);
    } else {
      reject(`Salario con id ${id} no encontrado`);
    }

  })

}

const getInfoUsuario = async (id) => {

  try {

    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El empleado ${empleado.nombre} tiene un salario de ${salario}`;

  } catch (error) {

    throw error;

  }

}

const id = 3;

getInfoUsuario(id).then(msg => console.log(msg)).catch(err => console.log(err));












