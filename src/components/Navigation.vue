<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">PMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/home">{{ $t('navigation.home.index') }}</b-nav-item>
        <b-nav-item to="/patients/registration">{{ $t('navigation.patients.registration') }}</b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

       <b-nav-item v-if="isLoggedIn && currentUser && currentUser.profile && currentUser.profile.is_admin" to="/dashboard">{{ $t('navigation.dashboard.index') }}</b-nav-item>
        

        <b-nav-item-dropdown :text="$t('language.title')" right>
          <b-dropdown-item v-for="lang in languages"  v-bind:key="lang.id" href="#" @click="changeLang(lang.value)">{{lang.title}}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <!-- <em>{{ $t('navigation.user.index') }}</em> -->
             <span v-if="currentUser">{{currentUser.username}}</span>
          </template>
          <b-dropdown-item href="#">{{ $t('navigation.user.profile') }}</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" href="#" @click="logout()">{{ $t('navigation.user.sign_out') }}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import {Meteor} from "meteor/meteor";

export default {
  data() {
    return {
      languages: [
        {
          title: "ENGLISH",
          value: "en"
        },
        {
          title: "বাংলা",
          value: "bn"
        }
      ]
    }
  },
  mounted() {
    console.log("Current User ",this.user);
  },
  meteor: {
    user() {
      return Meteor.user();
    }
  },
  methods: {
    changeLang(e) {
      window.loadLanguage(e);
    },
    logout() {
      Meteor.logout();
    }
  }
}
</script>
