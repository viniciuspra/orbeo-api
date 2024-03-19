import fastify from "fastify";

import { getSignedUploadUrl } from "../routes/upload-video";

const app = fastify();

app.register(getSignedUploadUrl);

const port = 3333;

app
  .listen({
    port,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log(`HTTP server is running at ${port}`);
  });
