<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- button 點擊觸發 doShowAlert 並帶入要傳入的訊息 -->
    <button @click="doShowAlert(message)">doShowAlerts</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      // msg 也可以傳入一個物件，自定義需要的內容，不一定只能傳入字串
      message: "我是寫在helloworld.vue的,訊息",
    };
  },
  methods: {
    // 把事件 emit 出去
    doShowAlert(msg) {
      this.$bus.$emit("hihi", msg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
