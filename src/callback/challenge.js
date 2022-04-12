//usamos esto porque es con callback
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData (url_api, callback){
    let xhttp = new XMLHttpRequest();//referencia al objeto que vamos a usar
    xhttp.open('GET',url_api,true);//el ultimo parametro activa el asincronismo
    
    //escuchar lo que hace la apertura y pasamos una funcion
    //Define una función que se llamará cuando cambie la propiedad readyState
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                //lo parceo para poder acceder a la data como un json porque se recibe una respuesta en texto
                callback(null,JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error,null);//matamos la ejecucion de esta funcion o callback
            }
        }
    };
    xhttp.send();//envia la solicitud
};

fetchData(API,function (error1,data1){
    if(error1) return console.error(error1);
    //tomamos el resultado del api para sacar el id primer personaje
    //esta informacion se obtiene de analizar el api con postman
    fetchData(API + data1.results[0].id, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})