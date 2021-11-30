import express from 'express';
import clienteRoutes from './routes/clientes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

clienteRoutes(app)

app.get('/prueba/:id', async(req, res, next)=>{
    res.status(201).json({message: "Datos creados"});
});

app.listen(port, () => {
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});