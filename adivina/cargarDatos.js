fetch('personajes.json')
  .then(response => response.json())
.then(data => {
    personajes = data.personajes;
    adivinarPersonaje();
    })
.catch(error => console.error('Error al cargar los datos:', error));