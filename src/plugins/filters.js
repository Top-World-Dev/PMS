import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", date => {
  if (date) {
    return moment(date).format("MM-DD-YYYY");
  }
  return "";
});
