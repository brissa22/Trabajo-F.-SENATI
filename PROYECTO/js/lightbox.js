const imagenes = document.querySelectorAll('.contenedor-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.img-ligth')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})


const aparecerImagen = (imagen) =>{
    imageneslight.src = imagen;
    contenedorligth.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
} 