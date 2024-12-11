import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.development");
}

const uri: string = process.env.MONGODB_URI;

// async function dbConnect() {
//   if (uri) {
//     mongoose.connect(uri).catch((reason) => {
//       console.log("filed connecting database", reason);
//     });
//   }
// }

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const db = mongoose.connection;

// 接続成功時
db.once("open", () => {
  console.log("MongoDB connected successfully!");
});

// 接続エラー時
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
