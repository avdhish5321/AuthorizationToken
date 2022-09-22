// Install npm i mongoose
const mongoos = require('mongoose');

mongoos.connect('mongodb://localhost:27017/ayush');
console.log("DB Conected.....!");


// Create Schema



const UserSchame = new mongoos.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
});

const user = mongoos.model("user",UserSchame);
const data = new user({
    name:"Utsav",
    email:"utsav123@gmail.com" 
});

data.save();
console.log('Data Insert.....!')