export default {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER:  process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 't1ll2rt1ll2r',
    DATABASE: process.env.DATABASE || 'b32_ambientes',
    DB_PORT: +process.env.DB_PORT || 3306
}