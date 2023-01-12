import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    dateofbirth: DataTypes.DATE,
    nik:DataTypes.BIGINT(16),
    age:DataTypes.INTEGER(2)
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();