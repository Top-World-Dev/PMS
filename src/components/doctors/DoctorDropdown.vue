<template>
  <b-form-select :options="options"></b-form-select>
</template>

<script>
import {Doctors} from "../../backend/collections";
export default {
  name: "doctor-dropdown",
  meteor: {
    $subscribe: {
      "doctors.all": []
    },
    options() {
      return Doctors.find({}).fetch();
    }
  }
};
</script>
