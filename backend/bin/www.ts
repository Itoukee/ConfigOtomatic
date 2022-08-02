import app from "../app";
import debug from "debug";
import http from "http";

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("backend:server")("Listening on " + bind);
};

const server = http.createServer(app);
server.listen(8000);
server.on("listening", onListening);
