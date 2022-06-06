<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="test">test</button>
    <button @click="test02">testPrint</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import eventBus from "../hook/eventBus/eventBus";
import useDemo from "../hook/eventBus/useDemo";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const testData = ref("hi");
    useDemo(testData);

    function test() {
      eventBus.emit("hihi", "你好");
    }

    watch(testData, (newValue, oldValue) => {
      console.log("newValue?", newValue);
    });
    function test02() {
      console.log(testData.value);
    }
    return { test, test02 };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

function useDemo() { throw new Error("Function not implemented."); } function
useDemo() { throw new Error("Function not implemented."); }
