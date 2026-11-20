import { boot } from "./runtime/index.js";
import { ChatFollow } from "./chat-follow.js";
const status = document.querySelector("#assistant-status");
const siteBase = new URL("./", import.meta.url).href;
try {
  await boot("#agent-app", {
    originUrl: siteBase,
    sandboxWorkerUrl: new URL("runtime/sandbox-worker.js", siteBase).href,
  });
  ChatFollow.start(document.querySelector("#agent-app"));
  status.textContent = "Kolkata Concierge is ready. Configure your AI model to begin.";
} catch (error) {
  status.textContent = `Concierge unavailable: ${error.message}`;
  console.error("Kolkata Concierge startup failed", error);
}
