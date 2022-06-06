import { createApp } from "vue";
import App from "./App.vue";
// 引入mitt
// import mitt, { Emitter } from "mitt";
// const mitter: Emitter<any> = mitt();

const app = createApp(App);
// 加入全局变量中
// app.config.globalProperties.$bus = mitter;
app.mount("#app");
