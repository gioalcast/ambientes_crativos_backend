import executeQuery from "../services/mysql.service";

const obtenerClientes= (req, res) =>{
    executeQuery('SELECT * FROM clientes').then ((response) => {
        res.json(response);
    }).catch(error => {
        res.status(500).send (error);
    });
}
const obtenerCliente= (req, res) =>{
    res.send ('obtenerCliente');

}
const agragarCliente= (req, res) =>{
    res.send ('agregarCliente');

}
const actualizarCliente= (req, res) =>{
    res.send ('actualizarCliente');

}
const eliminarCliente= (req, res) =>{
    res.send ('eliminarCliente');

}

export {obtenerClientes, obtenerCliente, agragarCliente, actualizarCliente, eliminarCliente}
