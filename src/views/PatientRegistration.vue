<template>
  <b-row>
    <b-col lg="5" offset-lg="3" sm="12" md="12">
      <create-token :display-token="true"></create-token>
    </b-col>
  </b-row>
</template>

<script>
import CreateToken from "../components/token/CreateToken";
export default {
  name: "patient-registration",
  components: {
    CreateToken
  }
};
</script>
