module.exports=(sequelize, DataTypes) =>{
    return sequelize.define('users',{
        name:{
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,  
        },
        email:{
          type: DataTypes.STRING(50),
          allowNull : false,
        },
        password:{
            type: DataTypes.INTEGER(50),
            allowNull:false,

        }
        
    },{
        freezeTableName: true //테이블 옵션, model 명 == table 명
    });


}