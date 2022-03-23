// ◘ Declaración de variables ◘ 
// elementos HTML
const campo2  = document.querySelector('#in_clave');
const btnLgn  = document.querySelector('#btn_login');
const lbClave = document.querySelector('#lb_clave');

// elementos creados
const span1 = document.createElement('span');

// estilos de elementos
span1.style = 'color:rgb(103, 18, 129);margin-left:20px';



// ◘ Programa Principal ◘
campo2.addEventListener("keypress",(e)=>{
    let value = e.currentTarget.value;
    
    if(value.length > 4){
        btnLgn.disabled = false;
        btnLgn.style = 'background-color : rgba(0, 128, 0, 1)';
        btnLgn.style = 'color: white;';
        lbClave.removeChild(span1);
    }else{
        btnLgn.disabled = true;
        btnLgn.style = 'background-color : rgba(1, 51, 1, 0.9)';
        btnLgn.style = 'color: rgba(255, 255, 255, 0.39);';
        span1.innerText = 'Introduzca mínimo 6 carácteres';
        lbClave.appendChild(span1);
    }
});



