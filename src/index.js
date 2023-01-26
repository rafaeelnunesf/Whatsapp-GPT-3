import { create } from "venom-bot";
import { commands } from "./openAiFunctions/index.js";

create({
  session: "Chat-GPT",
  multidevice: true,
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  client.onAnyMessage((message) => commands(client, message));
}
