import mysql from 'mysql2';
import config from '../config/config';
const getConnetion = () => {
    const connection = mysql.createConnection({
        user: config.DB_USER,
        password: config. DB_PASSWORD,
        database: config.DATABASE,
        port: +config.DB_PORT,
        host: config.DB_HOST,
    });

    connection.connect((error) => {
        if(error){
            throw error;
        } else {
            console.log('Conexión exitosa');
        }
    });

    return connection;
};

const executeQuery = (query: string): Promise <any> => {
    return new Promise((resolve, reject) => {
        try{
            const connection = getConnetion();
            connection.query(query, (error, result) => {
                if(error){
                    reject(error);
                } else{
                    resolve(result);
                }
            });
        } catch(error) {
            reject(error);
        }
    });
}

export default executeQuery;