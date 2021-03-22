import "@babel/polyfill";
import "mutationobserver-shim";

import Vue from 'vue'

import i18n from "./i18n";
import './plugins'
import store from "./store"

import router from "./router";
import App from './App.vue'
import "./registerServiceWorker";

import DefaultLayout from "./layouts/DefaultLayout";
import BareLayout from "./layouts/BareLayout";
import DashboardLayout from "./layouts/DashboardLayout";

Vue.component("DefaultLayout", DefaultLayout);
Vue.component("BareLayout", BareLayout);
Vue.component("DashboardLayout", DashboardLayout);

Vue.mixin({
  meteor: {
    currentUser() {
      return Meteor.user();
    },
    isLoggedIn() {
      return Meteor.userId();
    }
  },
  watch: {
    isLoggedIn(current, previous) {
      
      if(!current) {
        
        if(this.$route.name && this.$route.name !== "login") {
          this.$router.push("/login").catch(()=> {
            console.log("Error catched");
          });
          this.$swal({
              icon: "success",
              text: this.$t("messages.success"),
              toast: true,
              position: "top-right",
              timer: 2000,
              showClass: {
              popup: "animate__animated animate__fadeInDown"
              },
              hideClass: {
              popup: "animate__animated animate__fadeOutUp"
              },
              showConfirmButton: false
          });
        }
      }
    }
  }
})

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    ...App,
  })
});

window.loadLanguage = function(lang) {
  i18n.locale = lang;
  localStorage.setItem("pms/lang", lang);
};

