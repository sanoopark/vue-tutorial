<template>
  <div>{{ users }}</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style></style>
