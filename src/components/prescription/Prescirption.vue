<template>
  <b-row>
    <b-col cols="2" class="information">
      <diagnosis></diagnosis>
    </b-col>
    <b-col cols="10">
      <table class="patient-info">
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td contenteditable="true">{{ patient.name }}</td>
            <td><b>Date</b></td>
            <td>10/10/2020</td>
            <td><b>Sex</b></td>
            <td contenteditable="true">{{ patient.sex }}</td>
            <td><b>Age</b></td>
            <td contenteditable="true">{{ patient.age }}</td>
          </tr>
        </tbody>
      </table>
      <div class="patient-medicine">
        <font-awesome-icon icon="prescription"></font-awesome-icon>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Diagnosis from "./Diagnosis.vue";

export default {
  name: "prescription",
  props: ["patient"],
  components: {
    Diagnosis
  },
  mounted() {
    console.log("Patient", this.patient);
  }
};
</script>

<style scoped>
.information {
  border-right: 1px solid #888888;
  height: 80vh;
}
.patient-info {
  width: 100%;
}
.patient-info tr td:first-child,
.patient-info tr td:nth-child(3) {
  width: 5%;
}
.patient-info tr td:nth-child(2n + 2) {
  border-bottom: 1px dotted;
}
.patient-info tr td:nth-child(2) {
  width: 60%;
}
.patient-info tr td:nth-child(4) {
}
.patient-medicine {
  margin-top: 20px;
}
</style>
