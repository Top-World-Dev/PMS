<template>
  <div id="app">
    <component v-bind:is="component" />
  </div>
</template>

<style>
#nav {
  width: 100%;
  height: 37px;
  border-bottom: 1px solid #d5d5d5;
}
input,
button,
select {
  border-radius: 0px 0px !important;
}
.right {
  float: right;
}
html,
body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 12pt;
}
.nav-link {
  color: #ffffff !important;
}
</style>

<script>
import Navigation from "./components/Navigation";

export default {
  components: { Navigation },
  data() {
    return {
      selectedLang: "en",
      options: [
        { text: "BN", value: "bn" },
        { text: "EN", value: "en" }
      ]
    };
  },
  mounted() {
    let lang = localStorage.getItem("pms/lang") || "en";
  
    window.loadLanguage(lang);
    window.ROUTER = this.$router;
  },
  methods: {
    
  },
  computed: {
    component() {
      const layout = this.$route.meta && this.$route.meta.layout || 'DefaultLayout';
      return layout;
    }
  }
};
</script>
