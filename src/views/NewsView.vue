<template>
  <div>
    <div v-for="user in fetchedUsers" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #3
    ...mapGetters(['fetchedUsers']),

    // #2
    // ...mapState({
    //   users: state => state.users,
    // }),

    // #1
    // news() {
    //   return this.$store.state.users;
    // },
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
