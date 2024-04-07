function generarPregunta(personajesPosibles) {
    const propiedades = Object.keys(personajesPosibles[0]);
    const propiedadClave = propiedades.find(propiedad => {
    const valorUnico = new Set(personajesPosibles.map(personaje => personaje[propiedad]));
    return valorUnico.size > 1;
    });

    const valoresUnicos = new Set(personajesPosibles.map(personaje => personaje[propiedadClave]));
    const valorEjemplo = valoresUnicos.values().next().value;
    const propiedadLegible = propiedadClave.replace(/([A-Z])/g, ' $1').trim();

    return `¿El ${propiedadLegible} del personaje que estás pensando es "${valorEjemplo}"?`;
}

function evaluarPregunta(personaje, pregunta) {
    const match = pregunta.match(/\(["'](.+?)["']\)/);
    const valorPregunta = match ? match[1] : null;

    if (!valorPregunta) {
    return false;
    }

    const propiedadClave = Object.keys(personaje).find(propiedad => {
    if (typeof personaje[propiedad] === 'object') {
        return JSON.stringify(personaje[propiedad]) === valorPregunta;
    } else {
        return personaje[propiedad] === valorPregunta;
    }
    });

    return propiedadClave !== undefined;
}