 let a = 'Previo al error';
 let b = 'Despues del error';
 
 //Error de sintaxis
 const x  ='error de sintaxis';
 const funcion = () => {
     console.log('función ejecutada')
 }
 
//Error de lógica

const getResult = () => {

     const num = document.getElementById('lado').value;
     const area = num * 2;
     document.getElementById('area').innerHTML = area;
}



//Error de Ejecución


const errorDeEjecucion = () => {

     console.log(a)
    
     document.getElementById('parraf').addEventListener('click', () => {});

     console.log(b);
     
}
const manejoDeError = () => {
     console.log(a)
     try {
          document.getElementById('parraf').addEventListener('click', () => {});
     } catch (error) {
          console.error(error);
     }
     console.log(b);
};



