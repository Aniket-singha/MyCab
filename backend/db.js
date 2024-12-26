const mongoose=require('mongoose')

function connect(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log('Db connected')
    }).catch(err=>console.log(err))
}
module.exports=connect;