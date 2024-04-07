function generarPregunta(personajesPosibles) {
    const propiedades = Object.keys(personajesPosibles[0]);
    const propiedadClave = propiedades.find(propiedad => {
        const valorUnico = new Set(personajesPosibles.map(personaje => personaje[propiedad]));
        return valorUnico.size > 1 && valorUnico.has(null);
    });

    if (propiedadClave) {
        const propiedadLegible = propiedadClave.replace(/([A-Z])/g, ' $1').trim();
        return `¿El ${propiedadLegible} del personaje que estás pensando es nulo?`;
    }

    const propiedadClave2 = propiedades.find(propiedad => {
        const valorUnico = new Set(personajesPosibles.map(personaje => personaje[propiedad]));
        return valorUnico.size > 1;
    });

    const valoresUnicos = new Set(personajesPosibles.map(personaje => personaje[propiedadClave2]));
    const valorEjemplo = valoresUnicos.values().next().value;
    const propiedadLegible = propiedadClave2.replace(/([A-Z])/g, ' $1').trim();

    return `¿El ${propiedadLegible} del personaje que estás pensando es "${valorEjemplo}"?`;
}

function evaluarPregunta(personaje, pregunta) {
    const match = pregunta.match(/\(["'](.+?)["']\)/);
    const valorPregunta = match ? match[1] : null;

    if (!valorPregunta) {
        return false;
    }

    const propiedadClave = Object.keys(personaje).find(propiedad => {
        const valorPersonaje = personaje[propiedad];
        if (valorPersonaje === null) {
            return valorPregunta === 'null'; // Manejar valores nulos
        }
        if (typeof valorPersonaje === 'object') {
            return JSON.stringify(valorPersonaje) === valorPregunta;
        } else {
            return valorPersonaje === valorPregunta;
        }
    });

    return propiedadClave !== undefined;
}