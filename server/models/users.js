module.exports=(sequelize, DataTypes) =>{
    return sequelize.define('users',{
        name:{
            type: DataTypes.STRING(30),
            allowNull: false,
            
        },
        nickName:{
          type: DataTypes.STRING(30),
          allowNull : false,
          unique: true,  
        },
        
    },{
        freezeTableName: true //테이블 옵션, model 명 == table 명
    });


}