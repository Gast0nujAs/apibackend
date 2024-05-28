import dotenv from 'dotenv';
import businessDao from "../models/dao/clases/business.dao.js";
import userDao from "../models/dao/clases/user.dao.js";
import orderDao from "../models/dao/clases/order.dao.js";


dotenv.config();

export default {

    port: process.env.PORT || 3000,

    dbUser: process.env.DB_USER || 'root',
    dbPassword: process.env.DB_PASS || 'root',

}

export { businessDao, userDao, orderDao }