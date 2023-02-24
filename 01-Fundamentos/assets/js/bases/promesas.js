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

const id = 3;

// getEmpleado(id).then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// getSalario(id).then(salario => console.log(salario))
// .catch(err => console.log(err));

getEmpleado(id)
  .then(empleado => {

    getSalario(id)
      .then(salario => {
        console.log('A: El empleado', empleado, 'tiene un salario de', salario);
      })
      .catch(err => console.log(err));

  })
  .catch(err => console.log(err));



let nombre;
getEmpleado(id)
  .then(empleado => {

    nombre = empleado;
    return getSalario(id);

  }).then(salario => {
    console.log('B: El empleado:', nombre, 'tiene un salario de:', salario);
  })
  .catch(err => console.log(err));









