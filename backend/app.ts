import "./models/db";

import express from "express";
import logger from "morgan";

import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import componentRoute from "./routes/component";
import configRoute from "./routes/config";

// App

//Route ping
const app = express();
app.use(logger("dev"));

app.use(express.json({ limit: "50mb" })); //this is the build in express body-parser
app.use(
  //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/components", componentRoute);
app.use("/config", configRoute);

/** 404 error handler */
app.use((req, res) => {
  const error = new Error("Not Found");
  res.status(404).json({ message: error.message });
});

export default app;