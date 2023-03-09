function resaltarSeccion(selectorEnlace, selectorSeccion) {
    const enlace = document.querySelector(selectorEnlace);
    const seccion = document.querySelector(selectorSeccion);
    enlace.addEventListener('click', () => {
      seccion.classList.add('resaltar');
      setTimeout(() => {
        seccion.classList.remove('resaltar');
      }, 2000);
    });
  }
  
  resaltarSeccion('a[href="#educacion"]', '#educacion');
  resaltarSeccion('a[href="#experiencia"]', '#experiencia');
  resaltarSeccion('a[href="#habilidades"]', '#habilidades');
  resaltarSeccion('a[href="#contacto"]', '#contacto');  
            
const modoOscuroBtn = document.getElementById('modo-oscuro-btn');
modoOscuroBtn.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    });