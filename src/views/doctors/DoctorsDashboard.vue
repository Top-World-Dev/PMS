<template>
  <b-row>
    <b-col>
      <h4>{{ $t("doctors.home.title") }}</h4>

      <create-doctor id="launch-modal"></create-doctor>
      <b-row>
          <b-col cols="5">
              <b-table
                :bordered="true"
                :striped="true"
                :fields="fields"
                :items="doctors"
            >
            <template v-slot:cell(actions)="data">
                <create-doctor :id="data.item._id" :doctor="data.item"></create-doctor>
            </template>
            </b-table>
          </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { Doctors } from "../../backend/collections";
import * as _ from "underscore";

import { CreateDoctor } from "../../components";
export default {
  components: { CreateDoctor },
  data() {
      return {
          editDoctor: null
      }
  },
  meteor: {
    $subscribe: {
      "doctors.all": [],
    },
    doctors() {
      return Doctors.find({})
        .fetch()
        .map((docor) => {
            const d = _.extend(docor, {
            full_name: docor.title + " " + docor.first_name + " " + docor.last_name
          });
          return d;
        });
    },
  },
  computed: {
    fields() {
      return [
        {
          key: "full_name",
          label: this.$t("doctors.data_table.header.fullname"),
        },
        { key: "actions", label: this.$t("doctors.data_table.header.actions") },
      ];
    },
  },
  methods: {
      editDoctorProfile(doctor) {
          console.log("My Doctor", doctor);
      }
  }
};
</script>
