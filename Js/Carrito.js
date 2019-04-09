//Variables

const carrito = document.getElementById('carrito'),
    listphones = document.getElementById('phone'),
    listphones2 = document.getElementById('phone2'),
    listphones3 = document.getElementById('phone3'),
    lista = document.querySelector('#lista-carrito tbody');
console.log(carrito, listphones);

//AddEventListener
let Cargar = () => {

    listphones.addEventListener('click', comprarCell)
    listphones2.addEventListener('click', comprarCell)
    listphones3.addEventListener('click', comprarCell)
};

let comprarCell = (e) => {

    e.preventDefault();
    if (e.target.classList.contains('btn-primary')) {
        let cell = e.target.parentElement;

        leerDatos(cell);
    }

}

let leerDatos = (curso) => {

    const infoCell = {
        Image: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.Rd').textContent,
        id: curso.querySelector('a')
    }

    insetarCarrito(infoCell);
    console.log(infoCell);
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
};

Cargar();