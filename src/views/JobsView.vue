<template>
  <div>{{ jobs }}</div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  async created() {
    const { data: jobsListData } = await fetchJobsList();
    this.jobs = jobsListData;
  },
};
</script>

<style></style>
