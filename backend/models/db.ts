import config from "../config";
import mongoose from "mongoose";
import ansiColors from "ansi-colors";
import ora from "ora";

const url = config.mongoURI;

mongoose.connect(url);

let connectionOpened = false;

const spinner = ora("Connecting...");

mongoose.connection.on("connecting", function () {
  spinner.start();
});

mongoose.connection.on("error", function (error) {
  spinner.stop();
  console.error(
    ansiColors.bgBlack("  ERROR  "),
    ansiColors.bold.red("Error in MongoDB connection: " + error)
  );
});

mongoose.connection.on("connected", function () {
  spinner.stop();
  console.log(
    ansiColors.bgGreen.black("   CONNECTED    "),
    ansiColors.bold.green("Connection to  database successfully established.")
  );
});

mongoose.connection.once("open", function () {
  connectionOpened = true;
});

mongoose.connection.on("reconnected", function () {
  console.log(ansiColors.yellow("MongoDB reconnected!"));
});

mongoose.connection.on("disconnected", function () {
  if (connectionOpened) {
    console.log(
      ansiColors.bgRed.black("  DISCONNECTED  "),
      ansiColors.bold.red("Connection to database lost.")
    );
  }
});

export default mongoose.connection;
