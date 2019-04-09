lista = document.querySelector('#lista-carrito tbody');

let Cargar = () => {


    document.addEventListener('DOMContentLoaded', leerLocalStorage)
};

let obtenerLocalStorage = (curso) => {

    let cursos;
    if (localStorage.getItem('Cells') === null) {
        cursos = [];
    } else {
        cursos = JSON.parse(localStorage.getItem('Cells'));
    }

    return cursos;
};

let leerLocalStorage = () => {

    let cursos;
    cursos = obtenerLocalStorage();
    cursos.forEach((curso) => {

        const row = document.createElement('tr');
        row.innerHTML = `
   <td>
       <img class="imagen" src="${curso.Image} ">
   </td>
   <td>
   <h6>${curso.titulo}</h6>
   </td>
   <td>
   <h6>${curso.precio}</h6>
   </td>
   <td>
   <a href="#" class="borrar-curso" id="${curso.id}">X</a>
   </td>
   `;
        lista.appendChild(row);
    })
}

let eliminarCell = (e) => {

    e.preventDefault();
    let curso;
    let cursoId;
    if (e.target.className === 'borrar-curso') {

        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('id');
    }
    eliminarCursoLocalStorage(cursoId);
};

let eliminarCursoLocalStorage = (curso) => {

    let cursos;

    cursos = obtenerLocalStorage();
    cursos.forEach((cursoLS, index) => {
        if (cursoLS.id === curso) {

            cursos.splice(index, 1)
        }
    })

    localStorage.setItem('Cells', JSON.stringify(cursos));
};


Cargar();