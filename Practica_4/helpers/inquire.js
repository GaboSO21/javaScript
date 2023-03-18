import inquirer from 'inquirer';
import colors from 'colors';

const optPausa = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.magenta} para continuar...`,
        waitUserInput: true
    }
]

const opts = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Pon tu opcion',
        choices: [
            {
                name: '1. Crear persona',
                value: 1
            },
            {
                name: '2. Listar personas',
                value: 2
            },
            {
                name: '3. Actualizar personas',
                value: 3
            },
            {
                name: '4. Borrar persona',
                value: 4
            },
            {
                name: '0. Salir',
                value: 0
            }
        ]
    }
];

export const inquireMenu = async () => {

    await tituloMenu();
    const { opcion } = await inquirer.prompt(opts);

    return opcion;

}

export const pausa = async () => {

    const opcion = await inquirer.prompt(optPausa);

    return opcion;

}

export const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(question);

    return desc;

}

const tituloMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        const divisorTop = console.log('====================='.magenta);
        const salida = console.log('Seleccione una opcion'.red);
        const divisor = console.log('====================='.magenta);

        resolve(divisorTop, salida, divisor);

    });

}

export const listadoPersonas = async (listado = []) => {

    const choices = listado.map((persona, idx) => {

        return {
            value: persona._id,
            name: `${colors.green(idx + 1)} ${persona.nombre}`
        }

    })


    choices.unshift({
        value: 0,
        name: `${colors.green('0.')} Cancelar`
    })

    const optsBorrar = [
        {
            type: 'list',
            name: '_id',
            message: 'Seleccionar persona',
            choices
        }
    ]

    const { _id } = await inquirer.prompt(optsBorrar);
    return _id;

}

export const confirmar = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'Ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;

}

