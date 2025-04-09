const suma = (numero1, numero2) => {
    const laSuma = numero1 + numero2;
    console.log('La suma de ', numero1, ' y ', numero2, ' es: ', laSuma);
}

function resta(numero1, numero2) {
    const laResta = numero1 - numero2;
    console.log('La resta de ', numero1, ' y ', numero2, ' es: ', laResta);
}

const sumar = (numero1, numero2, numero3, numero4) => {
    const suma = numero1 + numero2 + numero3 + numero4;
    const edad = 10;
    switch (edad) {
        case 10:
            console.log("Es un niño");
            break;
        case 15:
            console.log("Es un pre adolescente");
            break;
        case 19:
            console.log("Es un adolescente");
            break;
        default:
            console.log("Es un viejo");
            break;
    }


            if (suma % 2 === '0' && true || false) {
                console.log("Es par");
            }
            else {
                console.log("Es impar");
            }
    }
    function opcion(opcion1) {
        const dias = [];
        dias.push("lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", 50, true);
        console.log(opcion1);
        console.log(dias);
        console.log(dias[opcion1 - 1]);
    }

    const contar = (hasta) => {
        console.log(`Contando hasta ${hasta}`);
        for (let index = 1; index <= hasta; index++) {
            console.log(`${index}`);
        }
        console.log(`Terminamos`);
    }

    var persona4 = "hola";

    const objetos = () => {
        const personas = [];
        const persona = {
            nombre: "Mario",
            edad: 35,
            docente: true
        };
        personas.push(persona);
        const persona2 = {
            nombre: "Kevin",
            edad: 19,
            docente: false
        };
        personas.push(persona2);

        var persona3 = {
            nombre: "Kevin",
            edad: 19,
            docente: false
        };

        personas.push(persona3, persona4);
        console.log(personas);
        console.log("El arreglo tiene:", personas.length);
    };