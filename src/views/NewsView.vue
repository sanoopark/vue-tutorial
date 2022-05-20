<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
