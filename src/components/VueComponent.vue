<template>
  <div>
    <p>これはVueのコンポーネントです。</p>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { counter, increment } from "../store/counter";
import { useStore } from "@nanostores/vue";

export default {
  name: "VueComponent",
  setup() {
    const counterState = useStore(counter);
    return { counter: counterState, increment };
  },
};
</script>
