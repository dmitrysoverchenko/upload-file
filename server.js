const express = require("express");
const cors = require("cors");
const FileRouter = require("./routes/file");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", FileRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
