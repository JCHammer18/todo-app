require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");



app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.sendFile("Server up and running"));

app.use("/api/tasks", tasks);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});
