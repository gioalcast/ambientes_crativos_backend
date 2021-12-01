import mysql from 'mysql';

const getConnetion = () => {
    const connection = mysql.createConnection({
        user: 'root',
        password: 't1ll2r2021',
        database: 'b32_ambientes',
        port: 3306,
        host: 'localhost',


    })
};

const executeQuery = (query: string) => {
    //código para ejecutar el query
};

export default executeQuery;