import executeQuery from "../services/mysql.service";

const obtenerClientes= (req, res) =>{
    executeQuery('SELECT * FROM clientes').then (response => {
        const data ={
            message:`${response.length} datos encontrados`,
            data: response.length > 0 ? response: null
        }
        res.json(data);
    }).catch(error => {
        res.status(500).send (error);
    });
}
const obtenerCliente= async(req, res) =>{
    const response = await executeQuery(`SELECT * FROM clientes WHERE idcliente = ${req.params.id}`);
    res.send (response);
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
