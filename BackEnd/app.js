import cors from "cors"
import {express} from "express";
import routes from "./src/routes";

const port = 8000;
const app = express();

app.use(express.json())
app.use(cors({
    origin: "*"
}))

routes(app);

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
