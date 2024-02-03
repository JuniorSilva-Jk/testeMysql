import express from 'express';
import cors from 'cors';
import userRoute from "./src/routes/users.route.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/user", userRoute)


app.listen(port, () => {
    console.log(`Back-end iniciado na porta ${port}`);
  });

