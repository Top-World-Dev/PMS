<template>
  <b-row>
    <b-col>
      <h4>Prescription</h4>
      <prescription :patient="patient"></prescription>
    </b-col>
  </b-row>
</template>

<script>
import Prescription from "../../components/prescription/Prescirption.vue";

export default {
  name: "patient-visit",
  props: ["slug"],
  components: {
    Prescription
  },
  mounted() {
    console.log("Th", this.slug);
  },
  computed: {
    patient() {
      return {
        name: "Mehedi Hasan",
        age: 30,
        sex: "Male"
      };
    }
  }
};
</script>
