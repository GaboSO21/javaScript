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

const getEmpleado = (id, callback) => {

  const empleado = empleados.find((e) => {
    return e.id === id;
  })

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado ${id} no encontrado`);
  }

}

const getSalario = (id, callback) => {
  const salario = salarios.find(e => e.id === id)?.salario;

  if (salario) {
    callback(null, salario);
  } else {
    callback(`Empleado ${id} no encontrado`);
  }

}

const id = 1;

getEmpleado(id, (err, empleado) => {

  if (err) {
    return console.log(err);
  }

  console.log(empleado.nombre);

  getSalario(id, (err, salario) => {

    if (err) {
      return console.log(err);
    }

    console.log('El empleado,', empleado.nombre, 'tiene un salario de: ', salario);

  })

});



