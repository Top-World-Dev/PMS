<template>
  <b-row>
    <b-col cols="3">
      <create-token></create-token>
    </b-col>
    <b-col>
      <last-token></last-token>
       <b-form-group id="input-group-0" label-for="input-0">
          <b-form-select
            id="input-0"
            :options="options"
            v-model="select.doctor"
          ></b-form-select>
        </b-form-group>
      <b-table
        striped="striped"
        :bordered="true"
        :borderless="true"
        :outlined="true"
        :small="true"
        :items="tokens"
        :fields="fields"
      >
        <template v-slot:head(name)="">
          <span class="text-info">{{ $t("table.patient.name") }}</span>
        </template>
        <template v-slot:head(phone)="">
          <span class="text-info">{{ $t("table.patient.phone") }}</span>
        </template>
        <template v-slot:head(date)="">
          <span class="text-info">{{ $t("table.patient.date") }}</span>
        </template>
        <template v-slot:head(token)="">
          <span class="text-info">{{ $t("table.patient.token") }}</span>
        </template>
        <template v-slot:cell(date)="data">
          <i>{{ data.value | formatDate }}</i>
        </template>
        <template v-slot:cell(token)="data">
          <i>{{ data.index + 1 }}</i>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import { Tokens, Doctors } from '../backend/collections';
// @ is an alias to /src
import CreateToken from "../components/token/CreateToken.vue";
import LastToken from "../components/token/LastToken.vue";
const getDoctorsName = (item)=> {
  return (item.title + ' ' + item.first_name + " " + item.last_name).toUpperCase();
}
export default {
  name: "Home",
  components: {
    CreateToken,
    LastToken
  },
  data() {
    return {
      fields: ["name", "phone", "date", "token"],
      select: {
        doctor: null
      }
    };
  },
  meteor: {
    "$subscribe": {
      "tokens.all": ["JYBQJaczd5whmPCX2"],
      "doctors.all": []
    },
    options() {
      return Doctors.find({}).fetch().map((item)=> {
        return  {value: item._id, text: getDoctorsName(item)}
      });
    },
    tokens() {
      const selected = this.select.doctor;
      let query = {};
      if(selected) {
        console.log("Selected", selected);
        query = {
          "doctor._id": selected
        }
      }
      return Tokens.find(query).fetch().map((item)=> {
        return {
          name: item.patient_info.first_name + ' ' + item.patient_info.last_name,
          phone: item.patient_info.phone,
          date: item.schedule
        }
      })
    }
  }
};
</script>
