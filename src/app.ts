import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/prueba/:id', (req, res, next)=>{

    console.log('Antes de la promesa')

    const x = 10;
    const promesa = new Promise ((resolve, reject) => {
        if (x == 10){
            resolve('Se resuelve promesa')
        } else {
            reject ('Promesa rechazada');
        }
    });

    promesa.then((res) =>{
        console.log (res);
    }).catch(error => {
        console.log(error)
    });

    console.log('Despues de la promesa')

    res.status(201).json({message: "Datos creados"});
});

app.listen(port, () => {
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});