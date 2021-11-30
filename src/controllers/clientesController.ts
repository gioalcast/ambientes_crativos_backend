
const obtenerClientes= (req, res) =>{
    res.send ('obtenerClientes');
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
