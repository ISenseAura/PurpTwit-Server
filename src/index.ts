import express from "express";

const app: any = express();
const port: number = 5000;

app.use(express.json());

app.use("/api/auth", require("./routes/authentication"));

app.get("/restart", (req: any, res: any) => {
 process.exit(-1);
});

app.listen(port, () => {
  console.log(`PurpTwit Backend listening at http://localhost:${port}`);
});
