const imagenes = documentElement.querySelectorAll('img-galeria')
const imagenesLight = document.querySelector('agregarImagen')

const contenedorLight= document.querySelector('imagen-light')
const hamburger1 = document.querySelector('.hambuger');

imagenes.forEach(imagen =>{
 imagen.addEventListener('click', ()=>{
	console.log(imagen.getAttribute('src'))
	})
})
contenedorLight.addEventListener('click', (e)=>{
	if(e.target !== imagen-Light{
		contenedorLight.classList.toggle('show')
		imagenesLight.classList.toggle('showImage')
		hamburger1.style.opacity = '1' 
	})
})
const aparecerImagen =(imagen)=>{
	imagen-Light.src = imagen
	contenedorLight.src.classList.toggle('show')
	imagen-Light.classList.toggle('showImage')
	hamburger1.style.opacity = '0' 
}
