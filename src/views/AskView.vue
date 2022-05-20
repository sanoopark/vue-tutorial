<template>
  <div>{{ ask }}</div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      ask: [],
    };
  },
  async created() {
    const { data: askListData } = await fetchAskList();
    this.ask = askListData;
  },
};
</script>

<style></style>
