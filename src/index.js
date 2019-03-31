const menteesData= mentees.data;
const root = document.getElementById('root');


const btnIniciarSesion = document.getElementById('iniciar-sesion');
const inisiarSesion = document.getElementById('iniciar-sesion');
const dni = document.getElementById('input-dni3');
const password = document.getElementById('input-password3');

const mostrandoMentee = (data) => {
    let cartilla = '';
        cartilla = ` <div class="card">
        <div class="card-header">
         Nombre: ${data.nombre}
        </div>
        <div class="card-body">
          <h5 class="card-title">${data.correo}</h5>
          <p class="card-text">${data.dni}</p>
        </div>
      </div>  `

      root.innerHTML += cartilla;
    
       
}

const validarCuenta = (data, dni, password) => {
   
   const validacion =  data.find((ele) => {
    return ele.dni===dni && ele.password === password;  
})
console.log(validacion);

if(validacion){
    return mostrandoMentee(validacion);
}else {
    // alert('datos incorrectos')
    console.log('incorrecto')
}

}

btnIniciarSesion.addEventListener('click', () => validarCuenta(menteesData, parseInt(dni.value), password.value) )
// btnIniciarSesion.addEventListener('click', () => mostrandoMentee(validarCuenta(menteesData, parseInt(dni.value), password.value)))

// mostrandoMentee(menteesData);

/* <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div> */