//usamos esto porque es con callback
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function fetchData (url_api, callback){
    let xhttp = new XMLHttpRequest();//referencia al objeto que vamos a usar
    xhttp.open('GET',url_api,true);//el ultimo vamos es activar el asincronismo
    
    //escuchar lo que hace la apertura y pasamos una funcion
    //Define una función que se llamará cuando cambie la propiedad readyState
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                //lo parceo para poder acceder a la data como un json porque se recibe una respuesta en texto
                callback(null,json.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error,null);//matamos la ejecucion de esta funcion o callback
            }
        }
    };
    xhttp.send//envia la solicitud
};