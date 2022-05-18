const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const BcryptSalt = require('bcrypt-salt');
const SR = new BcryptSalt;

const UsersSchema = new Schema({
    
email: {
    type: String,
    require: true
},       
name: {
    type: String,
    require: true
},
last_name: {
    type: String,
    require: true
},
password: {
    type: String,
    require: true
},
rol: {
    type: String,
    require: true
},
Rol_List: [{
    nameRol: {
        type: String,
        require: true
    }
}]

});

module.exports = model('user', UsersSchema);




















//para encriptar antes de que se envie a la BD
// salRounds encriptar el numero de veces
// UsersSchema.pre("save", function(next){
//     if(this.isNew || this.isModified("password")){
//         const document = this;
//         bcrypt.hash(document.password, SR.saltRounds, (err, hashedPassword) => {
//             if(err){
//                 next(err);
//             }else{
//                 document.password = hashedPassword;
//                 next();
//             }
//         });
//     }else{
//         next()
//     }
// });

//metodo comparar usuario con el de la BD en el login 
// UsersSchema.methods.isCorrectPassword = function(password, callback){
//     bcrypt.compare(password, this.password, function(err, same){
//         if(err){
//             callback(err);
//         }else{
//             callback(err, same);
//         }
//     });
// }