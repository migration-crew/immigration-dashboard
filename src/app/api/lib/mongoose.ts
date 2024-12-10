import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.development");
}

const uri: string = process.env.MONGODB_URI;

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then(mongoose => mongoose)
  }

  cached.conn = await cached.promise;
  return cached.conn
}

export default dbConnect;