import { getCurrentInstance, onMounted, Ref } from "vue";
import eventBus from "./eventBus";

export default function (data: Ref<string>): void {
  onMounted(() => {
    // const $bus = getCurrentInstance()?.appContext.config.globalProperties.mitter;
    eventBus.on("hihi", (num: string) => {
      data.value += num;
    });
  });
}
