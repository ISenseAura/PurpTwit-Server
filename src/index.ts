import express from "express";

const app: any = express();
const port: number = 5000;

app.use(express.json());

app.use("/api/auth", require("./routes/authentication"));

app.get("/", (req: any, res: any) => {
  res.send("Hello ");
});

console.log("test");

app.listen(port, () => {
  console.log(`PurpTwit Backend listening at http://localhost:${port}`);
});
