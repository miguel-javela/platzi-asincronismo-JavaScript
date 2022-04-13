const somethingWillHappen = () => {
    return new Promise ((resolve,reject) => {
        if(true){
            resolve('hey')
        } else {
            reject('whooops!')
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWillHappen2 = () => {
        return new Promise((resolve,reject) => {
            if(true){
                setTimeout(() => {
                    resolve('true');
                },2000)
            } else {
                //esto es una buena practica y hace que cuando la promesa no se cumpla nos aparece el console log
                //pero tambien nos muestra toda una ruta indicandonos el error
                const error = new Error ('whoops');
                reject(error);
            }
        });
    };

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array of results ', response);
    })
    .catch(err => {
        console.error(err);
    })