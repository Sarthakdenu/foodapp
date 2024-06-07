const express = require("express")
const app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = 4000;

const dbConnect = require("./Config/database");
dbConnect();
app.use(cors());
app.use(express.json());

const route = require("./routes/route")
app.use("/api/v1",route)

app.listen(process.env.PORT,()=>
{
    console.log("server running at PORT "+process.env.PORT);
})
