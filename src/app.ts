import express from 'express';
import clienteRoutes from './routes/clientes';
import config from './config/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

clienteRoutes(app)

app.get('/prueba/:id', async(req, res, next)=>{
    res.status(201).json({message: "Datos creados"});
});

app.listen(config.PORT, () => {
    return console.log(`Servidor corriendo sobre el puerto ${config.PORT}`)
});

