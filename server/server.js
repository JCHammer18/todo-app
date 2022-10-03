const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();


app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.sendFile("Server up and running"));

app.use("/api/tasks", tasks);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
