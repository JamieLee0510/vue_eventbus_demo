import { createApp } from "vue";
import App from "./App.vue";
import EventBus from "./plugin/eventBus";
const $bus = new EventBus();

const app = createApp(App);

//如果用 setup function，就用provide和inject來使用eventBus
//app.provide("$bus", $bus);

//如果是用 optional api，就掛到全局的properties上，用this獲取
app.config.globalProperties.$bus = $bus;

app.mount("#app");
