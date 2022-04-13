//usamos esto porque es con callback
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest();//referencia al objeto que vamos a usar
        xhttp.open('GET',url_api,true);//el ultimo parametro activa el asincronismo
        
        //escuchar lo que hace la apertura y pasamos una funcion
        //Define una función que se llamará cuando cambie la propiedad readyState
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject (new Error('Error',url_api))
            }
        });
        xhttp.send();//envia la solicitud
    });
};


module.exports = fetchData;