import mongoose from 'mongoose';

// uri mongodb server
const uri: string = 'mongodb://localhost:27017/projects';

async function runMongo() {
  try {
    const conn = await mongoose.connect(uri, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    
    console.log('MongoDB Running');
    return conn;
  }
  catch(err) {
    console.log(err);
  }
}

export default runMongo;