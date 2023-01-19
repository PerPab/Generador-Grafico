
let boton = document.querySelector('#boton')
let boton_volver = document.querySelector('#boton_volver')
let boton_descargar = document.querySelector('#boton_descarga')

boton.addEventListener('click', ()=>{
  iniciar()
  ocultar() 
})

boton_volver.addEventListener('click', ()=>{
  location.reload()
})

boton_descargar.addEventListener('click', descargar)


function iniciar(){

  let titulo = document.querySelector('#titulo')
  if((titulo.value).trim()==''){
    titulo.setAttribute('placeholder', 'Debe completar este campo!')
  }
  
  let etiquetas = document.querySelector('#etiquetas')
  if((etiquetas.value).trim()==''){
    etiquetas.setAttribute('placeholder', 'Debe completar este campo!')
  }
  
  let valores = document.querySelector('#valores')
  if((valores.value).trim()==''){
    valores.setAttribute('placeholder', 'Debe completar este campo!')
  }
 
  let tipo = document.querySelector('#tipos').value 

  
  titulo = document.querySelector('#titulo').value
  etiquetas = document.querySelector('#etiquetas').value
  valores = document.querySelector('#valores').value
  let labels = etiquetas.split(',');
  let data = valores.split(',');

  let grafico = document.getElementById('grafico').getContext('2d');

  new Chart(grafico, {
    type: tipo,
    data: {
      labels: labels,
      datasets: [{
        label: titulo,
        data: data,
        borderWidth: 2
      }]
  },
    options: {
      scales: {
        y: {
         beginAtZero: true
        }
      }
    }
  });
  
}

function ocultar(){ 
  document.getElementById('contenedor-grafico').classList.toggle('oculta')
  document.getElementById('panel').classList.toggle('oculta')
}

function descargar(){
  const imagen = document.getElementById('grafico');
  const dataURL = imagen.toDataURL('image/jpeg', 1.0);
  
  let enlace = document.createElement('a');
  enlace.href = dataURL;
  enlace.download = 'miGrafico';
  document.body.appendChild(enlace);
  enlace.click();
  enlace.parentNode.removeChild(enlace);
}





















