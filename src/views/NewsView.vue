<template>
  <div>{{ users }}</div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const { data: newsListData } = await fetchNewsList();
    this.users = newsListData;
  },
};
</script>

<style></style>
