//Variables


const carrito = document.getElementById('carrito'),
    listphones = document.getElementById('phone'),
    listphones2 = document.getElementById('phone2'),
    listphones3 = document.getElementById('phone3'),
    listphones4 = document.getElementById('phone4'),
    listphones5 = document.getElementById('phone5'),
    listphones6 = document.getElementById('phone6'),
    varciarCarrito = document.getElementById('vaciar-carrito'),
    lista = document.querySelector('#lista-carrito tbody');

//AddEventListener
let Cargar = () => {

    listphones.addEventListener('click', comprarCell)
    listphones2.addEventListener('click', comprarCell)
    listphones3.addEventListener('click', comprarCell)
    listphones4.addEventListener('click', comprarCell)
    listphones5.addEventListener('click', comprarCell)
    listphones6.addEventListener('click', comprarCell)
    carrito.addEventListener('click', eliminarCell);
    varciarCarrito.addEventListener('click', vaciarTodo);
    document.addEventListener('DOMContentLoaded', leerLocalStorage)
};

let comprarCell = (e) => {


    if (e.target.classList.contains('btn-primary')) {
        let cell = e.target.parentElement;

        leerDatos(cell);
        console.log(cell);
    }

}

let leerDatos = (curso) => {

    const infoCell = {
        Image: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.Rd').textContent,
        id: curso.querySelector('a').getAttribute('id')
    }

    insetarCarrito(infoCell);
};

let insetarCarrito = (curso) => {

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
    guardarCellLocalStorage(curso);
};

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

let vaciarTodo = () => {

    //lista.innerHTML = ``;
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    vaciarLocalStorage();
    return false;
};

let guardarCellLocalStorage = (curso) => {

    let cursos;
    cursos = obtenerLocalStorage();
    cursos.push(curso);
    localStorage.setItem('Cells', JSON.stringify(cursos));
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

let vaciarLocalStorage = () => {
    localStorage.clear();
};

Cargar();