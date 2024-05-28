import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/users.route.js";
import config from "./config/config.js";
import orderRoute from "./routes/orders.route.js";
import businessRoute from "./routes/business.route.js";


const app = express();


const PORT = 3000;
const dbUser = config.dbUser;
const dbPassword = config.dbPassword;
const DB_URI = `mongodb+srv://${dbUser}:${dbPassword}@clustergaston.vw5wfe4.mongodb.net/`;


mongoose.connect(DB_URI)
    .then(() => console.log("Base de datos conectada"))
    .catch((err) => console.log(err));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/orders", orderRoute);
app.use("/business", businessRoute);




app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
