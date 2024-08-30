const mongoose=require("mongoose");

async function connectMongodb(url)
{
    return mongoose.connect(url, {
    }).then(() => console.log('MongoDB connected Successfully'))
      .catch(err => console.error('MongoDB connection error:', err));
}



module.exports=connectMongodb;