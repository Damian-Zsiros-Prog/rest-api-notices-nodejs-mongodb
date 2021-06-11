import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

(async () => {
  const db = await mongoose.connect(process.env.URI_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database is connected to:", db.connection.name);
})();
