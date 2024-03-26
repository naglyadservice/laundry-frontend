import path from "path";
import express from "express";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/"));
app.use("/", router);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`))