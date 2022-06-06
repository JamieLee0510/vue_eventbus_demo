<template>
  <div></div>
</template>

<script>
export default {
  name: "Demo",
  created() {
    console.log("----event bus", this.$bus);

    // 在 created 的時候在 Vue 底下註冊監聽 alert:message 這個事件
    this.$bus.$on("hihi", (msg) => {
      // 並將接收到的 message 傳給自己的 methods showAlert 去觸發 alert 事件。
      this.showAlert(msg);
    });
  },
  methods: {
    showAlert(msg) {
      console.log("---trigget alert");
      alert(msg);
    },
  },
  beforeDestroy: function () {
    // 元件銷毀前要註銷監聽事件
    this.$bus.$off("alert:message");
  },
};
</script>
