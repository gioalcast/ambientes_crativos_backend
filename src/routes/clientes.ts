import { Router } from "express";
import { actualizarCliente, agragarCliente, eliminarCliente, obtenerCliente, obtenerClientes, } from "../controllers/clientesController";

const clienteRoutes= (app) => {
    const router = Router ();
    app.use('/', router);
    router.get('/obtenerClientes', obtenerClientes);
    router.get('/obtenerCliente/:id', obtenerCliente );
    router.post('/agregarCliente', agragarCliente);
    router.put('/actualizarCliente/:id', actualizarCliente);
    router.delete('/eliminarCliente/:id', eliminarCliente);
}

export default clienteRoutes;