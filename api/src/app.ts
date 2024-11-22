import { Hono } from "hono";
import decksRoute from "./routes/deck"

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", decksRoute);

export default app;
