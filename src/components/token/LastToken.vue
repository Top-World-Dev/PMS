<template>
  <div>
    <h3>{{ $t("token.last_token") }}:: {{ lastToken }}</h3>
  </div>
</template>

<script>
export default {
  meteor: {
    $subscribe: {
      "doctors.token.last_token": []
    },
    lastToken() {
      return 0;
    }
  },
  computed: {
    // lastToken() {
    //   return this.$store.getters.lastToken;
    // }
  }
};
</script>
