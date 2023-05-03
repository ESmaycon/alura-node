import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Maycon:rmh2022@maycon.d14pp6i.mongodb.net/Node-express"
);

let db = mongoose.connection;

export default db;
